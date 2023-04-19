import { Component, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatChipEditedEvent } from '@angular/material/chips';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Observable, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { MY_FORMATS } from 'src/app/core/datepicker/config-datepicker';

import { YearsOldPipe } from 'src/app/core/pipes/years-old.pipe';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_LOCALE, useValue: 'es-mx' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class AccountFormComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  fullnameInput: FormControl = new FormControl('', [Validators.required]);
  hobbieInput: FormControl = new FormControl('', [Validators.required]);
  birthdayInput: FormControl = new FormControl('', [Validators.required]);
  cardInput: FormControl = new FormControl('', [Validators.required]);

  isYoung: boolean = false;

  options: string[] = [];
  optionsSelected: string[] = [];

  filteredOptions$: Observable<string[]>;

  constructor(private pipeYears: YearsOldPipe) {
  }

  ngOnInit() {
    this.options = [
      'Jugar Fútbol', 'Jugar Basquetball', 'Jugar Tennis',
      'Jugar Voleibol', 'Jugar Fifa', 'Jugar Videojuegos'
    ];

    this.birthdayInput.valueChanges.subscribe(val => {
      let years = Number.parseInt(this.pipeYears.transform(val, true).toString());

      if( years >= 18 ) {
        this.isYoung = false;
        this.cardInput.setValidators([Validators.required]);
        this.cardInput.setValue(null);
      }
      else {
        this.isYoung = true;
        this.cardInput.clearValidators();
        this.cardInput.setValue(null);
      }
    });

    this.filteredOptions$ = this.hobbieInput.valueChanges.pipe(
      startWith(''),
      debounceTime(200),
      distinctUntilChanged(),
      map(value => this._filter(value || '')),
    );
  }

  removeItem(option: string): void {
    const index = this.optionsSelected.indexOf(option);

    if (index >= 0) {
      this.optionsSelected.splice(index, 1);
    }
  }

  onOptionSelected(option: MatAutocompleteSelectedEvent){
    this.optionsSelected = [option.option.value.trim()];
    this.hobbieInput.setValue('', {emitEvent: false});
  }

  onClickContinue() : void {
    this.fullnameInput.markAllAsTouched();
    this.hobbieInput.markAllAsTouched();
    this.birthdayInput.markAllAsTouched();
    this.cardInput.markAllAsTouched();

    if(this.fullnameInput.invalid || this.hobbieInput.invalid || this.birthdayInput.invalid || this.cardInput.invalid){
      return;
    }

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

import { Component, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Observable, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { MY_FORMATS } from 'src/app/core/datepicker/config-datepicker';

import { YearsOldPipe } from 'src/app/core/pipes/years-old.pipe';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountManagementService } from '../../services/account-management.service';
import { AccountData } from '../../models/account.interface';

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

  constructor(private service: AccountManagementService, private pipeYears: YearsOldPipe,
            private router: Router, private route: ActivatedRoute) {
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

    if(this.fullnameInput.invalid || this.optionsSelected.length < 1 || this.birthdayInput.invalid || this.cardInput.invalid){
      return;
    }

    const account: AccountData = {
      id: 0,
      fullname: this.fullnameInput.value,
      hobbie: this.optionsSelected[0],
      birthday: this.birthdayInput.value,
      cardIdentification: this.cardInput.value
    }

    this.service.saveAccount(account);

    this.router.navigate(['choose-pokemon'], { relativeTo: this.route })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lancamentos-cadastro',
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.scss'],
})
export class LancamentosCadastroComponent {
  form!: FormGroup;
  cities: any[] = [];
  stateOptions: any[] = [];

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.stateOptions = [
      { label: 'Receita', value: 'RECEITA' },
      { label: 'Despesa', value: 'DESPESA' }
    ];

    this.form = new FormGroup({
      selectedCity: new FormControl<any | null>(null),
    });
  }

  submitForm() {
    console.log(this.form.value);
  }
}

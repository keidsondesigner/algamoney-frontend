import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.scss']
})
export class PessoasCadastroComponent {
  form!: FormGroup;

  constructor() {}

  submitForm() {
    console.log(this.form.value);
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {
  formLogin!: FormGroup;

  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
      // private toastrNotifier: ToastrService,
  ) {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['',  [Validators.required, Validators.minLength(4)]]
  });
  }

  //  usando getter para um acesso fácil aos campos do formulário
  get formControls() { return this.formLogin.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // Para aqui se form for invalid
    if (this.formLogin.invalid) {
      console.log('form inválido');
      // this.toastrNotifier.error('Preencha todos os campos.', 'Formulário inválido!');
      return;
    }

    this.authService.login(this.formLogin.getRawValue()).pipe(first()).subscribe({
      next: (result: any) => {
        // console.log('login result', result);
        this.loading = false;
        this.router.navigate(['lancamentos/pesquisa']);

        //this.toastrNotifier.success('token criado com sucesso.', 'Login efetuado!');
        console.log('sucesso ao efetuar login');
      },
      error: (e: HttpErrorResponse) => {
        alert(JSON.stringify(e));
        this.loading = false;
        this.authService.handleError(e);
      }
    });
  }
}

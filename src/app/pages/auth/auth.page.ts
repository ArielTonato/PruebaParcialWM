import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  loginForm: FormGroup;
  firebaseSrv = inject(FirebaseService);
  router = inject(Router)

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }

  async onSubmit() {
    if (this.loginForm.valid) {
      // Aquí iría la lógica real de autenticación
      this.firebaseSrv.signIn(this.loginForm.value).then(async (res) => {
        console.log(res);
        // Simulamos una autenticación exitosa
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Has iniciado sesión correctamente',
          buttons: ['OK']
        });
        await alert.present();

        this.router.navigateByUrl('/main');
      }).catch(async (err) => {
        console.log(err);
        const alert = await this.alertController.create({
          header: 'Hubo un error',
          message: 'Inicio de sesion incorrecto',
          buttons: ['OK']
        })
        await alert.present();
      });


    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos correctamente',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}

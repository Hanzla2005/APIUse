import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  async onResetPassword() {
    console.log('Email before validation:', this.email);

    if (!this.email) {
      await this.showAlert('Error', 'Please enter your email.');
      return;
    }

    console.log('Email entered:', this.email);

    if (!this.validateEmail(this.email)) {
      await this.showAlert('Error', 'Please enter a valid email address.');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Checking email...',
    });
    await loading.present();

    this.authService.checkEmailExists(this.email)
      .then(async signInMethods => {
        console.log('Sign-in methods:', signInMethods);

        if (signInMethods.length == 0) {
          await loading.dismiss();
          await this.showAlert('Error', 'No account found with this email address.');
          return;
        }

        this.authService.resetPassword(this.email)
          .then(async () => {
            await loading.dismiss();
            await this.showAlert('Success', 'Password reset email sent.');
            this.router.navigateByUrl('/confirm-password');
          })
          .catch(async error => {
            await loading.dismiss();
            await this.showAlert('Error', error.message);
          });
      })
      .catch(async error => {
        await loading.dismiss();
        console.error('Error checking email existence:', error);
        await this.showAlert('Error', 'Failed to check email existence.');
      });
  }

  private validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}

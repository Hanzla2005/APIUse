import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { confirmPasswordReset, getAuth } from 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.page.html',
  styleUrls: ['./confirm-password.page.scss'],
})
export class ConfirmPasswordPage {
  newPassword: string = '';
  oobCode: string = '';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.oobCode = this.route.snapshot.queryParams['oobCode'];
  }

  async onSetNewPassword() {
    if (!this.newPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please enter your new password.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const auth = getAuth();
    confirmPasswordReset(auth, this.oobCode, this.newPassword)
      .then(async () => {
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Password has been reset successfully.',
          buttons: ['OK']
        });
        await alert.present();
      })
      .catch(async error => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.message,
          buttons: ['OK']
        });
        await alert.present();
      });
  }
}

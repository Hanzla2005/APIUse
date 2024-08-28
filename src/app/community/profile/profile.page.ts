import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async accept() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Do you really want to accept?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Accept action canceled');
          }
        },
        {
          text: 'Accept',
          handler: () => {
            this.proceedWithAccept();
          }
        }
      ]
    });
  
    await alert.present();
  }

  async reject() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Do you really want to reject?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Reject action canceled');
          }
        },
        {
          text: 'Reject',
          handler: () => {
            this.proceedWithReject();
          }
        }
      ]
    });
  
    await alert.present();
  }

  proceedWithAccept() {
    // Handle DOM elements in profile.html
    const acceptProfile = document.getElementById('button') as HTMLElement | null;
    const afterProfile = document.getElementById('after1') as HTMLElement | null;

    if (acceptProfile) {
      acceptProfile.style.display = 'none';
    }
    if (afterProfile) {
      afterProfile.innerText = 'Accepted';
      afterProfile.style.color = 'green';
      afterProfile.style.fontSize = '22px';
      afterProfile.style.textAlign = 'center';
    }

    // Handle DOM elements in notification.html
    const chooseNotification = document.getElementById('choose') as HTMLElement | null;
    const afterNotification = document.getElementById('after') as HTMLElement | null;

    if (chooseNotification) {
      chooseNotification.style.display = 'none';
    }
    if (afterNotification) {
      afterNotification.innerText = 'Accepted';
      afterNotification.style.color = 'green';
      afterNotification.style.fontSize = '22px';
      afterNotification.style.textAlign = 'center';
    }
  }

  proceedWithReject() {
    // Handle DOM elements in profile.html
    const acceptProfile = document.getElementById('button') as HTMLElement | null;
    const afterProfile = document.getElementById('after1') as HTMLElement | null;

    if (acceptProfile) {
      acceptProfile.style.display = 'none';
    }
    if (afterProfile) {
      afterProfile.innerText = 'Rejected';
      afterProfile.style.color = 'red';
      afterProfile.style.fontSize = '22px';
      afterProfile.style.textAlign = 'center';
    }

    // Handle DOM elements in notification.html
    const chooseNotification = document.getElementById('choose') as HTMLElement | null;
    const afterNotification = document.getElementById('after') as HTMLElement | null;

    if (chooseNotification) {
      chooseNotification.style.display = 'none';
    }
    if (afterNotification) {
      afterNotification.innerText = 'Rejected';
      afterNotification.style.color = 'red';
      afterNotification.style.fontSize = '22px';
      afterNotification.style.textAlign = 'center';
    }
  }
}

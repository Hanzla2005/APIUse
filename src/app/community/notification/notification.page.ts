import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

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

  async reject(){
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Do you really want to reject?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'secondary',
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
    // Use 'document.getElementById' to correctly fetch the element
    const accept = document.getElementById('choose') as HTMLElement | null;
    const after = document.getElementById('after') as HTMLElement | null;
  
    if (accept) {
      accept.style.display = 'none'; // Hides the element
      if(after){
      after.innerText = 'Accepted';
      after.style.color = 'green';
    }
    } else {
      console.error('Element with id "choose" not found.');
    }
  }

  proceedWithReject(){
    const accept = document.getElementById('choose') as HTMLElement | null;
    const after = document.getElementById('after') as HTMLElement | null;
  
    if (accept) {
      accept.style.display = 'none'; // Hides the element
      if(after){
      after.innerText = 'Rejected';
    after.style.color = 'red';
}
    } else {
      console.error('Element with id "choose" not found.');
    }
  }


}
function getElementById(arg0: string) {
  throw new Error('Function not implemented.');
}


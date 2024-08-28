import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-join',
  templateUrl: './join.page.html',
  styleUrls: ['./join.page.scss'],
})
export class JoinPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async requestSent() {
    // Show the alert
    const alert = await this.alertController.create({
      header: 'Request Sent',
      message: 'Your request has been successfully sent.',
      buttons: ['OK'],
    });

    await alert.present();

    // Update the button after the alert is dismissed
    alert.onDidDismiss().then(() => {
      const request = document.getElementById('request') as HTMLIonButtonElement | null;

      if (request) {
        // Set the text of the element
        request.innerText = 'Request Sent';

        // Set the color to dark green
        request.style.color = 'darkgreen';
        request.style.fontSize = '20px';

        // Disable the button
        request.disabled = true;
      } else {
        console.error('Element with id "request" not found.');
      }
    });
  }
}

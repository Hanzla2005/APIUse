import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-community',
  templateUrl: './new-community.page.html',
  styleUrls: ['./new-community.page.scss'],
})
export class NewCommunityPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async openCamera() {
    console.log('openCamera');
    try {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri,
            source: CameraSource.Prompt // Prompts user to choose between Camera or Photos
        });

        // Display the image (or handle it as needed)
        const imageUrl = image.webPath;
        console.log('Image URL:', imageUrl);

        // You can now use imageUrl to display the image in your app or upload it
    } catch (error) {
        console.error('Error opening camera:', error);
    }
  }

  navigateToCommunity() {
    this.router.navigate(['/commuity']);
  }

  navigateToGuildeLines(){
    this.router.navigate(['/guidelines']);
  }
}

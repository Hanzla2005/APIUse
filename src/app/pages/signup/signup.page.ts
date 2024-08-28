import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  username!: string;
  phoneNumber!: string;
  email!: string;
  password!: string;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    // Initialization logic if any
  }

  async signup() {
    try {
      // Check if all fields are filled
      if (!this.email || !this.password || !this.username || !this.phoneNumber) {
        throw new Error('All fields are required');
      }
  
      console.log('Creating user with email:', this.email);
      
      // Create user with email and password
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      const user = userCredential.user;
      
      if (user) {
        console.log('User created:', user.uid);
        
        // Save additional user info in Firestore
        await this.firestore.collection('users').doc(user.uid).set({
          username: this.username,
          phoneNumber: this.phoneNumber,
          email: this.email,
        });
        
        console.log('User info saved to Firestore');
        
        // Navigate to another page after successful signup
        this.navCtrl.navigateRoot('/home');
        
        // Show success message
        const toast = await this.toastCtrl.create({
          message: 'Signup successful!',
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }
    } catch (error) {
      let errorMessage = 'Unknown error occurred';
      if (error instanceof Error) {
        // Provide more specific error messages
        if (error.message.includes('auth/email-already-in-use')) {
          errorMessage = 'Email is already in use';
        } else if (error.message.includes('auth/weak-password')) {
          errorMessage = 'Password is too weak';
        } else if (error.message.includes('auth/invalid-email')) {
          errorMessage = 'Invalid email address';
        } else {
          errorMessage = error.message;
        }
      }
      
      console.error('Signup error:', errorMessage);
  
      // Show error message
      const toast = await this.toastCtrl.create({
        message: errorMessage,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }
}

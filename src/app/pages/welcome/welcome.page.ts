import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import '@codetrix-studio/capacitor-google-auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  loginError: string | null = null;
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  ngOnInit() {
  }

  async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.signInWithPopup(provider);
      console.log('User successfully logged in:', credential);
      await this.router.navigate(['/commuity']); // Navigate to the home page
    } catch (error) {
      console.error('Error during Google login:', error);
      this.loginError = 'Login failed. Please try again.';
    }
  }
}

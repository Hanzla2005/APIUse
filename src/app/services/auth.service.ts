import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { from, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  loginFireauth(value: { email: string, password: string }) {
    return new Promise<any>((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          error => reject(error)
        );
    });
  }

  resetPassword(email: string) {
    return new Promise<void>((resolve, reject) => {
      this.auth.sendPasswordResetEmail(email)
        .then(
          () => resolve(),
          error => reject(error)
        );
    });
  }

  checkEmailExists(email: string) {
    return new Promise<any>((resolve, reject) => {
      this.auth.fetchSignInMethodsForEmail(email)
        .then(
          methods => resolve(methods),
          error => reject(error)
        );
    });
  }
}

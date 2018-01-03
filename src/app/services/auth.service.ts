import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      this.afAuth.authState.take(1).subscribe(user => {
        resolve(user);
      });
    });
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password) as Promise<any>;
  }

  logout() {
    return this.afAuth.auth.signOut() as Promise<any>;
  }

}

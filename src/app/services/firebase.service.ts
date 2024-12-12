// firebase.service.ts
import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  router = inject(Router);
  constructor(private afAuth: AngularFireAuth) {}

  signIn(user: User) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
  }

  signUp(user: User) {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }

  getUser() {
    if(localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user')!);
    }
    return null;
  }
}

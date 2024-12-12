// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
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
}

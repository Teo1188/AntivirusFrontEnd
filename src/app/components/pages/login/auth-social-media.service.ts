import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthSocialMediaService {
  private firebaseConfig = {
    apiKey: "AIzaSyC1-luUeJhgI1BMQaEANh4ghhAxcfpLXz0",
    authDomain: "fundacion-antivirus-295f3.firebaseapp.com",
    projectId: "fundacion-antivirus-295f3",
    storageBucket: "fundacion-antivirus-295f3.firebasestorage.app",
    messagingSenderId: "321273398023",
    appId: "1:321273398023:web:e7852686ab2ff72f923ba2"
  };

  private app = initializeApp(this.firebaseConfig);
  private auth = getAuth(this.app)
  constructor() { }
  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(this.auth, provider);
  }
}
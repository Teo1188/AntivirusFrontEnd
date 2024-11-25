import { Component } from '@angular/core';
import { AuthSocialMediaService } from '../../auth-social-media.service';
import { AuthService } from 'src/app/services/auth.service';
import { SweetalertService } from 'src/app/sweetalert.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent {
  constructor(private authSocialMediaService: AuthSocialMediaService, private authService: AuthService, private sweetalertService: SweetalertService) { }

  signInWithGoogle() {
    this.authSocialMediaService
      .signInWithGoogle()
      .then((result) => {
        console.log('User signed in:', result.user);
        if (result && result.user && result.user.getIdToken) {
          result.user.getIdToken().then(token => {
            this.authService.saveToken(token);
            console.log('Token guardado');
            this.sweetalertService.showSuccessLogin('Login exitoso. ¿Te gustaría ir a las novedades?');
          });
        }
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
  }

  loginWithFacebook() {
    this.authSocialMediaService.signInWithFacebook()
      .then((result) => {
        console.log('Logged in with Facebook:', result);
        if (result && result.user && result.user.getIdToken) {
          result.user.getIdToken().then(token => {
            this.authService.saveToken(token);
            console.log('Token guardado');
            this.sweetalertService.showSuccessLogin('Login exitoso. ¿Te gustaría ir a las novedades?');
          });
        }
      })
      .catch((error) => {
        console.error('Error logging in with Facebook:', error);
      });
  }
}
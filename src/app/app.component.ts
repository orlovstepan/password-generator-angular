import { Component } from '@angular/core';
import { generatePassword } from './generatePassword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 10;
  lowercase = false;
  uppercase = false;
  special = false;
  password = '';
  buttonText = 'Copy';

  doGeneratePassword() {
    this.password = generatePassword({
      length: this.length,
      lowercase: this.lowercase,
      uppercase: this.uppercase,
      special: this.special
    });
    this.buttonText = 'Copy';
  }

  copyPass() {
    navigator.clipboard.writeText(this.password)
      .then(() => this.buttonText = 'Copied!')
      .catch((error) => console.log('Error copying password:', error));
  }
}

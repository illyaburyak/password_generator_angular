import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  passwordLength = 0;
  includeLetters = false;
  includeSymbols = false;
  includeNumbers = false;
  password = '';

  onPasswordLength(value: string) {
    console.log(value);
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }


  onChangeUseLetters() {
    return this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    return this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    return this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+:"?<>}{||~';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedpassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedpassword += validChars[index];
    }

    this.password = generatedpassword;
  }

}


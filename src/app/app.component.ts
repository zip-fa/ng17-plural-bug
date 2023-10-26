import { Component } from '@angular/core';
import { I18nPluralPipe, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// import localeUk from '@angular/common/locales/uk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [I18nPluralPipe, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: any[] = ['Message 1'];
  messageMapping = {
    'zero': `дней`,
    'one': `день`,
    'few': `дня`,
    'many': `дней`,
    'other': `дней`
  };

  constructor() {
    // registerLocaleData(localeUk);
  }
}

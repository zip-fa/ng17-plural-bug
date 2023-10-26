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
    'zero': $localize`:@@plurals.days_0:дней`,
    'one': $localize`:@@plurals.days_1:день`,
    'few': $localize`:@@plurals.days_2:дня`,
    'many': $localize`:@@plurals.days_0:дней`,
    'other': $localize`:@@plurals.days_0:дней`
  };

  constructor() {
    // registerLocaleData(localeUk);
  }
}

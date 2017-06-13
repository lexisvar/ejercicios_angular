import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <app-header></app-header> <app-footer></app-footer>
  `,
})
export class AppComponent  { name = 'Alexis'; }

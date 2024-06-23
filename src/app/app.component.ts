import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <tui-root>
      <div class="app__container">
        <app-registration></app-registration>
      </div>
    </tui-root>
  `
})
export class AppComponent {
  title = 'EnKodTask3';
}

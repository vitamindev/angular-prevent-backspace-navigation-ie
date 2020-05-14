import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-prevent-backspace-navigation-ie';

  @HostListener('document:keydown', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    if (evt.key === 'Backspace') {
      let doPrevent = true;
      const target = evt.target as HTMLInputElement;
      const disabled = target.disabled || target.readOnly;
      if (!disabled) {
        if (target.isContentEditable) {
          doPrevent = false;
        }

        const whitelist = ['INPUT', 'TEXTAREA', 'SELECT'];

        const nodeName = target.nodeName.toLocaleUpperCase();
        if (whitelist.indexOf(nodeName) > -1) {
          doPrevent = false;
        }
      }

      if (doPrevent) {
        evt.preventDefault();
        return false;
      }
    }
  }
}

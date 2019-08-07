import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  /** data */
  text = '';

  /**
   * data save
   */
  save(): void {
    if (!this.text) { return; }

    const blob = new Blob([this.text], { type: 'text/plain' });

    const a = document.createElement('a');
    a.href =  URL.createObjectURL(blob);
    a.download = 'sample.txt';
    a.click();
  }
}

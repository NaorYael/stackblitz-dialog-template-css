import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div class="box">
  <header class="header">
      header
  </header>
  <main class="main">
      main main main main main main main
  </main>
  <footer class="footer">
      footer
  </footer>
</div>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

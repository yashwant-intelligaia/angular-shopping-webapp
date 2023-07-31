import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ShoppingIcon } from 'src/app/utils/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    iconRegistory: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistory.addSvgIconLiteral(
      'shopping',
      sanitizer.bypassSecurityTrustHtml(ShoppingIcon)
    );
  }

  handleLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { fetchCartItems } from 'src/app/utils/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartCount: number = 0;
  subscription: Subscription;
  constructor(private router: Router, private cart: CartService) {
    this.subscription = cart.cartItems.subscribe((data) => {
      this.cartCount = data.length;
    });
  }

  ngOnInit() {
    const items = fetchCartItems();
    this.cartCount = items.length;
  }

  handleLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

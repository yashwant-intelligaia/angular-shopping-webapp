import { Component } from '@angular/core';

interface ProductDataType {
  name: string;
  price: number;
  description: string;
  id: number;
  src: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: ProductDataType[] = [
    {
      id: 1,
      name: 'Orange',
      price: 5.5,
      description: 'A bag of delicious oranges!',
      src: 'https://sc01.alicdn.com/kf/UT8.CaXX2NXXXagOFbXC/fresh-navel-oranges.jpg',
    },
    {
      id: 2,
      name: 'Apple',
      price: 8,
      description: 'A bag of delicious apples!',
      src: 'https://newenglandapples.files.wordpress.com/2014/10/img_5595.jpg',
    },
    {
      id: 3,
      name: 'Passionfruit',
      price: 5.5,
      description: 'A bag of delicious passionfruit!',
      src: 'https://sc01.alicdn.com/kf/UT8ovSIXQNaXXagOFbXt/Fresh-Passion-Fruit-with-Best-Price-and.jpg',
    },
    {
      id: 4,
      name: 'Pineapple',
      price: 5.5,
      description: 'A bag of delicious pineapples!',
      src: 'http://www.foodmatters.com/media/images/articles/16-powerful-reasons-to-eat-pineapple.jpg',
    },
    {
      id: 5,
      name: 'Mango',
      price: 6,
      description: 'A bag of delicious mangos!',
      src: 'http://membrillo.com.au/wp-content/uploads/2016/11/bg-mango-01.jpg',
    },
  ];
}

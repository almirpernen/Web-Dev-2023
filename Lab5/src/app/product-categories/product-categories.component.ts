import { Component } from '@angular/core';
import { productCategories } from '../productCategories';
import { products } from '../products';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.css'
})
export class ProductCategoriesComponent {
  productCategories = [...productCategories];
  products = [...products];


  isCategoryUnique(category: string): boolean {
    return this.productCategories.filter(pc => pc.name === category).length === 1;
  }
}

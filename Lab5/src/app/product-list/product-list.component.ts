import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];
  productCategoryFromRoute!: string;

  constructor(private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.productCategoryFromRoute = String(routeParams.get('productCategory')).toLowerCase();
  
    this.products = products.filter(product => {
      const match = product.category.toLowerCase() === this.productCategoryFromRoute;
      if (!match) {
        console.log('Mismatching product:', product);
      }
      return match;
    });
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  getWhatsAppShareLink(productHref: string) {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(productHref)}`;
  } 

  getTelegramShareLink(productHref: string) {
    return `https://t.me/share/url?url=${encodeURIComponent(productHref)}`;
  }

  prevImage(product: Product) {
    product.currentImageIndex = Math.max(product.currentImageIndex - 1, 0);
  }

  nextImage(product: Product) {
    product.currentImageIndex = Math.min(product.currentImageIndex + 1, product.img.length - 1);
  }

  incrementLikes(product: Product) {
    if (!product.liked) {
      product.like += 1;
      product.liked = true;
    }else{
      product.like -= 1;
      product.liked = false;
    }
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
}
 
  removeProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }

}

import { Component } from "@angular/core";

import { products, Product } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  products = [...products];

  share(product: Product): void {
    const shareLink = product.link;
    const shareMessage = `Check out this product: ${shareLink}`;
    const encodedMessage = encodeURIComponent(shareMessage);
    const telegramLink = `https://t.me/share/url?url=${shareLink}&text=${encodedMessage}`;
    window.open(telegramLink, "_blank");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
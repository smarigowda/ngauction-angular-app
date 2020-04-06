import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: Product;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((routeParams) => {
      this.productId = parseInt(routeParams.productId, 10);
    });

    this.product = this.productService.getProductById(this.productId);
  }
}

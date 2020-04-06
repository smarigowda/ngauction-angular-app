import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.productId = parseInt(routeParams.productId, 10);
    });
  }
}

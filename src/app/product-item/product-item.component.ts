import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Product } from '../shared/product.service';

@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {}
}

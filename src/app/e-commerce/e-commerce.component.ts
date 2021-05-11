import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {

  productsData = [];

  view = 'grid';

  selectedFilter = 'high to low';

  selectionChanges(event) {
    if (event.value == 'low to high') {
      this.productsData = orderBy(this.productsData, ['price'], 'asc');
    } else {
      this.productsData = orderBy(this.productsData, ['price'], 'desc');
    }
  }


  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.fetchMockData();
  }

  fetchMockData() {
    this._http.get(`https://mocki.io/v1/3382b646-f945-4236-8186-10cce82c035e`).subscribe((data: any[]) => {
      this.productsData = data;
    });
  }

}

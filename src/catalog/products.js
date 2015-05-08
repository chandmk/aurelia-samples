import {HttpClient} from 'aurelia-http-client';

export class Products {
	static inject = [HttpClient];
	url = "/data/catalog.json";
	lastcategory = "";
	products = [];
	filteredProducts = [];
	filterText = '';
	inStockOnly= false;
	constructor(http) {
		this.http = http;
	}
	activate() {
		return this.http.get(this.url).then(r => {
			this.products = JSON.parse(r.response);
			this.filteredProducts = this.products;
		});
	}
	
	isNewCategory(category) {
		if(this.lastCategory !== category) {
			this.lastCategory = category;
			return true;
		}
		return false;
	}
	
	filterChanged() {
		this.filteredProducts = this.products.filter(p => 
		p.name.indexOf(this.filterText) >= 0 && (this.inStockOnly ? p.stocked : true));	
	}
}
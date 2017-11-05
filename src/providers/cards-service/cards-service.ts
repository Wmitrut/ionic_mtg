import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the CardsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardsServiceProvider {

  private BASE_URL = "https://api.magicthegathering.io/v1/cards";
  private CUSTOM_HEADER = [
    {'Page-Size': 10},
    {'Count': 10}
  ];

  constructor(public http: Http) {

  }

  getCards() {
    let headers = new Headers(this.CUSTOM_HEADER);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.BASE_URL, options).map(
      response => response.json()
    ).catch(this.handleError);
  }

  handleError(error) {
    console.log('handleError(error) ' + error + ' *****');
    return Observable.throw(error || 'Server error');
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Urls {
  daDataAddress =
    'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
  searchAdverts = 'http://194.87.237.48:5000/Advert/search';
  advertById = 'http://194.87.237.48:5000/Advert/';
  postAdvert = 'http://194.87.237.48:5000/Advert';
  register = 'http://194.87.237.48:5000/Auth/Register';
  login = 'http://194.87.237.48:5000/Auth/Login';
  categories = 'http://194.87.237.48:5000/Categories';
  currentUser = 'http://194.87.237.48:5000/Users/current';
  changeUser = 'http://194.87.237.48:5000/Users/';
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TranslateService {

  API_KEY = 'trnsl.1.1.20200502T082248Z.0d7971bc0b0478fc.a6a7ff670c94ff4a13692cde0de9e0544b67343e'
 
  constructor(private httpClient: HttpClient) { }

  getTranslate(russianWord: string) {
    return this.httpClient.get(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.API_KEY}&text=${russianWord}&lang=ru-en`
    );
  }
}


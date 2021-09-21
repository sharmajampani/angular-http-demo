import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  //API_KEY = '43fe1ab118114429800ce3f123e5f26f';
  constructor(private httpClient: HttpClient) { }
  
  public getPCMResponses(){
	return this.httpClient.get('http://localhost:8080/worker/compliance/response/v1');
  }
  //public getNews(){
//	return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  //}
}

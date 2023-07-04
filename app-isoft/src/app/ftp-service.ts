import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse} from  '@angular/common/http';
@Injectable()
export class FtpService {
 constructor(private httpClient: HttpClient){}
 urlBase = 'http://62.171.144.81:8080/api/isoft';

 descargarAbaco(): any{

   return this.httpClient.get(this.urlBase,  { responseType: "blob", reportProgress: true, observe: "events"});
 }
}

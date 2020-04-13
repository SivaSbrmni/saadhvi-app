import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HomeService {
  constructor(private http: HttpClient) {}

  getStatusData(): Observable<any> {
    return this.http.get("api/status");
  }
  getTxfrData(): Observable<any> {
    return this.http.get("api/transformer-data");
  }
}


// constructor(private http: HttpClient) {}

// getStatusData(): Observable<any> {
//   return this.http.get(this.BASE_URL + "/status");
// }
// getTxfrData(): Observable<any> {
//   return this.http.get(this.BASE_URL + "/transformer-data");
// }
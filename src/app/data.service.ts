import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseURL;
  }

  get(url: string) {
    return this.http.get(this.baseURL + url);
  }
  post(url: string, payload) {
    return this.http.post(this.baseURL + url, payload);
  }
  update(url: string, payload) {
    return this.http.put(this.baseURL + url, payload);
  }
  delete(url: string) {
    return this.http.delete(this.baseURL + url);
  }
}

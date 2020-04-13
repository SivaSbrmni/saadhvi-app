import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LocalStorageService {
  protected subjects: { [key: string]: BehaviorSubject<any> } = {};

  select(key: string, defaultValue: any = null): Observable<any> {
    const value = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : defaultValue;

    if (!this.subjects[key]) {
      this.subjects[key] = new BehaviorSubject(value);
    }
    return this.subjects[key];
  }

  get(key: string): any {
    const value = window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : null;

    return value;
  }

  set(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));

    if (this.subjects.hasOwnProperty(key)) {
      this.subjects[key].next(value);
    }
  }

  remove(key: string): void {
    window.localStorage.removeItem(key);

    if (this.subjects.hasOwnProperty(key)) {
      this.subjects[key].next(null);
    }
  }
}

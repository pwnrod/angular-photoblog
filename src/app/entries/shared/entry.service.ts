import { Entry } from "./entry.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class EntryService {
    constructor(private http: Http) {
    }
    getEntries(): Promise<Entry[]> {
     return this.http.get("/app/entries")
            .toPromise()
            .then(response => reponse.json().data as Entry[]);
    }
}

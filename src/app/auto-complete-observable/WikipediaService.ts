import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {
    constructor(private jsonp: Jsonp) {
    }

    search(term: string) {
        // tslint:disable-next-line:prefer-const
        // tslint:disable-next-line:no-var-keyword
        const searchUrl = new URLSearchParams();
        searchUrl.set('action', 'opensearch');
        searchUrl.set('search', term);
        searchUrl.set('format', 'json');
        return this.jsonp
                .get('http://en.wikipedia.com/w/api.php?callback=JSONP_CALLBACK', { search: searchUrl })
                .map((response) => response.json()[1]);
    }
}

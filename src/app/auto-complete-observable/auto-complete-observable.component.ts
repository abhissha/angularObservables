import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { WikipediaService } from './WikipediaService';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auto-complete-observable',
  templateUrl: './auto-complete-observable.component.html',
  styleUrls: ['./auto-complete-observable.component.css']
})
export class AutoCompleteObservableComponent {
  items: Observable<Array<string>>;
  term = new FormControl();

  constructor(private wikipediaService: WikipediaService) {
    this.items = this.term.valueChanges
                  .debounceTime(400)
                  .distinctUntilChanged()
                  .switchMap(term => this.wikipediaService.search(term));
  }

}

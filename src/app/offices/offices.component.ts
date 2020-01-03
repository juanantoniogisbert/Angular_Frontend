import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Office } from '../core/models/office.model';
import { Store } from '@ngrx/store';
import * as fromRoot from "../reducers";
import { OfficesUpdateAction } from '../actions/offices';

@Component({
	selector: 'app-offices',
	templateUrl: './offices.component.html',
	styleUrls: ['./offices.component.css']
})

export class OfficesComponent implements OnInit {
	public officesList: Observable<Office[]>;

	constructor(public store: Store<fromRoot.State>) {
		this.officesList = store.select(fromRoot.getOfficesList);
	}

	ngOnInit() {
		this.store.dispatch(new OfficesUpdateAction());
	}
}
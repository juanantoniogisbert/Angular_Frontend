import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Office } from '../models/office.model';

// @Injectable({
// 	providedIn: 'root'
// })

@Injectable()
export class OfficesService {

	constructor(
		private apiService: ApiService
	) {}

	/**
	 * Get all offices from server
	 */
	getAll(): Observable<Office[]> {
		return this.apiService.get('/offices/')
		.pipe(
			map(data => {
				return data['offices'];
			})
		)
	}

	getOne(slug): Observable<Office> {
		return this.apiService.get(`/offices/${slug}`)
		.pipe(map(data => {
			return data;
		}));
	}

}

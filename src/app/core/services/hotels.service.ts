import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hotel } from '../models';


@Injectable()
export class HotelsService {
    constructor (
        private apiService: ApiService
    ) {}

    getAll(): Observable<Hotel> {
        return this.apiService.get('/hotel/')
        .pipe(map(data => {
            return data.hotels
        }));
    }

    getSlug(slug): Observable<Hotel> {
        return this.apiService.get('/hotel/' + slug)
        .pipe(map(data => {
            return data.hotels;
        }));
    }
}

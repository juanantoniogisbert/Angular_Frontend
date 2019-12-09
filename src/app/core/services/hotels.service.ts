import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class HotelsService {
    constructor (
        private apiService: ApiService
    ) {}

    getAll(): Observable<string> {
        return this.apiService.get('/hotel/')
        .pipe(map(data => {
            return data
        }));
    }

    getSlug(slug): Observable<string> {
        return this.apiService.get('/hotel/' + slug)
        .pipe(map(data => {
            return data;
        }));
    }
}

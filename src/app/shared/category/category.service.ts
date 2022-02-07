import { Injectable } from '@angular/core';
import { ApiService } from '@shared/api';
import { PaginationResponse } from '@shared/pagination';
import { classToPlain, plainToClassFromExist } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, CategoryParams, CategoryRequest } from './models';

@Injectable()
export class CategoryService {
  constructor(private apiService: ApiService) {}

  public search(params: CategoryParams): Observable<PaginationResponse<Category>> {
    const request = new CategoryRequest({ ...params });

    return this.apiService.get('/categories', classToPlain<CategoryRequest>(request))
      .pipe(
        map((response) => plainToClassFromExist(new PaginationResponse<Category>(Category), response))
      );
  }
}

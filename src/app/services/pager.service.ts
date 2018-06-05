import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 5) {
    let totalPages = Math.ceil(totalItems / pageSize);

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    let pages: Array<number> = Array.from(Array(totalPages).keys()).map(item => ++item);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}

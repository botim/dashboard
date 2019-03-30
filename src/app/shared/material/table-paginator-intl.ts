import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TablePaginatorIntl extends MatPaginatorIntl {
  private _ofLabel: string;

  constructor(private _translate: TranslateService) {
    super();

    _translate.onLangChange.subscribe(() => this.getAndInitTranslations());

    this.getAndInitTranslations();
  }

  getAndInitTranslations() {
    const translation = this._translate.instant('PAGINATOR');

    this.itemsPerPageLabel = translation['ITEMS_PER_PAGE'];
    this.nextPageLabel = translation['NEXT_PAGE'];
    this.previousPageLabel = translation['PREVIOUS_PAGE'];
    this.firstPageLabel = translation['FIRST_PAGE_LABEL'];
    this.lastPageLabel = translation['LAST_PAGE_LABEL'];
    this._ofLabel = translation['OF'];

    this.changes.next();
  }

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 ${this._ofLabel} ${length}`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} ${this._ofLabel} ${length}`;
  };
}

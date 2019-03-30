import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'macrocase' })
export class MacroCasePipe implements PipeTransform {
  transform(text: any): string {
    if (typeof text !== 'string') {
      return text;
    }

    return text
      .trim()
      .replace(/\s+/g, '')
      .replace(/([A-Z])/g, '_$1')
      .toUpperCase();
  }
}

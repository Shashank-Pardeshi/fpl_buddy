import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pascalCasePipe',
  standalone: true,
})
export class PascalCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value) return '';
    return value
      .replace(/_/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}

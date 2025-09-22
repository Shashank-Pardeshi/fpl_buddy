import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lessThan',
  standalone: true,
})
export class LessThanPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return `Up to ${value}M`;
  }
}

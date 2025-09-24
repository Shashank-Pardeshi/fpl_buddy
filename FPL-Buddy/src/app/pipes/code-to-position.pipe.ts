import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeToPosition',
  standalone: true,
})
export class CodeToPositionPipe implements PipeTransform {
  transform(code: number, format: string = ''): string {
    let position = '';
    if (format === 'short') {
      if (code === 1) {
        position = 'GK';
      } else if (code === 2) {
        position = 'DEF';
      } else if (code === 3) {
        position = 'MID';
      } else if (code === 4) {
        position = 'FWD';
      }
    } else {
      if (code === 1) {
        position = 'Goalkeeper';
      } else if (code === 2) {
        position = 'Defender';
      } else if (code === 3) {
        position = 'Midfielder';
      } else if (code === 4) {
        position = 'Forward';
      }
    }

    return position;
  }
}

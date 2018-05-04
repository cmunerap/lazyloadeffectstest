import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() {
    console.warn('Logger service was loaded');
  }

  write(message: string) {
    console.log('{LOGGER} ' + message);
  }

}

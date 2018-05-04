import { Injectable } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Injectable()
export class OrderService {

  constructor(private logger: LoggerService) {
    console.warn('Order service was loaded');
  }

  getOrder() {
    this.logger.write('Order was requested!');
  }

}

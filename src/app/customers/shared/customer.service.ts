import { Injectable } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Injectable()
export class CustomerService {

  constructor(private logger: LoggerService) {
    console.warn('Customer service was loaded');
  }

  getCustomer() {
    this.logger.write('Customer was requested!');
  }

}

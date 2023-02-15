import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices'; //     <-- to this
import { MathService } from './math.service';
import { IHealth, INumberArray, IPersonId, IString, ISumOfNumberArray, NoArgs } from './interfaces/app.interface';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private mathService: MathService, private appService: AppService) {}

  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray { 
    this.logger.log('Adding ' + numberArray.data.toString()); 
    console.log(numberArray);     
    return { sum: this.mathService.accumulate(numberArray.data) };
  }

  @GrpcMethod('AppController', 'GetInfoById')
  getInfoById(id: IString, metadata: any): IPersonId {
    return this.mathService.getInfoById(id.data);
  }

  @GrpcMethod('AppController', 'GetHealth')
  getHealth(inp : NoArgs, metadata: any ): IHealth{
    return this.mathService.getHealth();
  }

  @Get()
  hellowWorld(){
    return this.appService.getHello();
  }
}

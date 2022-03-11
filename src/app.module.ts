import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsController } from './modules/tuits/tuits.controller';
import { TuitsService } from './modules/tuits/tuits.service';

@Module({
	imports: [],
	controllers: [AppController, TuitsController],
	providers: [AppService, TuitsService]
})
export class AppModule {}

import {
	Controller, 
	Get,
	Patch,
	Delete,
	Post,
	Param,
	Body,
	HttpCode,
	Query
} from '@nestjs/common';

import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {

	constructor(private readonly tuitService: TuitsService) {}
	
	@Get() 
	getTuits(@Query() filterQuery): Tuit[] {
		const { searchTerm, orderBy } = filterQuery; 
		return this.tuitService.getTuits();
	}

	@Get(':id')
	getTuit(@Param('id') id: string ): Tuit {
		return this.tuitService.getTuit(id);
	}

	@Post()
	createTuit(@Body('message') message: string): void {
		return this.tuitService.createTuit(message);
	}
	
	@Patch(':id')
	updateTuit(@Param('id') id: string, @Body('message') tuit): Tuit {
		return this.tuitService.updateTuit(id, tuit);
	}

	@Delete(':id')
	deleteTuit(@Param('id') id: string): void {
		return this.tuitService.removeTuit(id);
	}
}

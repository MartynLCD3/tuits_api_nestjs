import {
	Controller,
	Get,
	Patch,
	Delete,
	Post,
	Param,
	Body
} from '@nestjs/common';

import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
	constructor(private readonly tuitService: TuitsService) {}

	@Get()
	getTuits(): Tuit[] {
		return this.tuitService.getTuits();
	}

	@Get(':id')
	getTuit(@Param('id') id: number): Tuit {
		return this.tuitService.getTuit(id);
	}

	@Post()
	createTuit(@Body() message: CreateTuitDto): void {
		console.log(message);
		return this.tuitService.createTuit(message);
	}

	@Patch(':id')
	updateTuit(@Param('id') id: number, @Body() tuit: UpdateTuitDto): Tuit {
		return this.tuitService.updateTuit(id, tuit);
	}

	@Delete(':id')
	deleteTuit(@Param('id') id: number): void {
		return this.tuitService.removeTuit(id);
	}
}

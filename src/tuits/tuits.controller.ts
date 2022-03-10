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

@Controller('tuits')
export class TuitsController {

	@Get() 
	getTuits(@Query() filterQuery): string {
		const { searchTerm, orderBy } = filterQuery; 
		return `All ${searchTerm} tuits ordered by ${orderBy}`;	
	}

	@Get(':id')
	getTuit(@Param('id') id: string ): string {
		return `Your tuit id is ${id}`;
	}

	@Post()
	@HttpCode(204)
	createTuiter(@Body('message') body: string): string {
		return `${body}`;
	}
	
	@Patch(':id')
	updateTuit(@Param('id') id: string, @Body() tuit): string {
		return `The tuit ${id} has been updated`;
	}

	@Delete(':id')
	deleteTuit(@Param('id') id: string): string {
		return `The tuit ${id} has been deleted`;	
	}
}

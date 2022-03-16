import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';

@Injectable()
export class TuitsService {
	private tuits: Tuit[] = [{ id: 2, message: 'Hello World amiguis' }];

	getTuits(): Tuit[] {
		return this.tuits;
	}

	getTuit(id: number): Tuit {
		const tuit = this.tuits.find((item) => item.id === id);
		if (!tuit) {
			throw new NotFoundException('Tuit not found');
		}
		return tuit;
	}

	createTuit({ message }: CreateTuitDto) {
		this.tuits.push({
			id: (Math.floor(Math.random() * 2000) + 1),
			message
		});
	}

	updateTuit(id: number, { message }: UpdateTuitDto) {
		const tuit: Tuit = this.getTuit(id);
		tuit.message = message;
		return tuit;
	}

	removeTuit(id: number) {
		const index = this.tuits.findIndex((tuit) => tuit.id === id);
		if (index >= 0) {
			this.tuits.splice(index, 1);
		}
	}
}

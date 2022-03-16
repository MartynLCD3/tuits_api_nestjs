import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';
import { Tuit } from './tuit.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TuitsService {
	constructor(
		@InjectRepository(Tuit) private readonly tuitRepository: Repository<Tuit>
	) {}

	async getTuits(): Promise<Tuit[]> {
		return await this.tuitRepository.find({ relations: ['user'] });
	}

	async getTuit(id: number): Promise<Tuit> {
		const tuit = await this.tuitRepository.findOne(id, { relations: ['user'] });
		if (!tuit) {
			throw new NotFoundException('Tuit not found');
		}
		return tuit;
	}

	async createTuit({ message }: CreateTuitDto) {
		const tuit: Tuit = this.tuitRepository.create({ message });
		return this.tuitRepository.save(tuit);
	}

	async updateTuit(id: number, { message }: UpdateTuitDto) {
		const tuit: Tuit = await this.tuitRepository.preload({
			id,
			message
		});
		await this.tuitRepository.save(tuit)

		if (!tuit) {
			throw new NotFoundException('Resource not found');
		}

		return this.tuitRepository.findOne({
			where: { id: user.id },
			relations: ['user']
		});
	}

	async removeTuit(id: number): Promise<void> {
		const tuit: Tuit = await this.tuitRepository.findOne(id);
		if (!tuit) {
			throw new NotFoundException('Resource not found');
		}
		this.tuitRepository.remove(tuit);
	}
}

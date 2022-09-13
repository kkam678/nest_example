import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export class UserRepository {
	constructor(
		private manager: EntityManager,
		@InjectRepository(User)
		private userRepo: Repository<User>
	) {}

	async save(user: User): Promise<User> {
		return await this.manager.transaction(async (manager) => {
			return await manager.save(user);
		});
	}
}

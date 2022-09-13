import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
	constructor(private userRepository: UserRepository) {}
	async create(createUserDto: CreateUserDto): Promise<User> {
		return await this.userRepository.save(createUserDto.toEntity());
	}

	findAll(): Array<User> {
		return [];
	}

	findOne(id: number): User {
		return new User({});
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}

import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	SerializeOptions,
	UseInterceptors,
	ClassSerializerInterceptor,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as test from 'src/user/dto/create-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { plainToClass } from 'class-transformer';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async create(@Body() createUserDto: CreateUserDto): Promise<User> {
		return await this.userService.create(createUserDto);
	}

	@Get()
	findAll() {
		return new test.CreateUserDto();
		return new User({});
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(+id, updateUserDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.remove(+id);
	}
}

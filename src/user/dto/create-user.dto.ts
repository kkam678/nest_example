import { Expose } from 'class-transformer';
import {
	IsEmail,
	IsEnum,
	IsInt,
	IsNumber,
	IsString,
	Length,
	Max,
	Min,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto {
	@IsString()
	@Length(4, 10)
	account: string;

	@IsString()
	password: string;

	@IsString()
	profile_image: string;

	@IsString()
	@Length(4, 8)
	nickname: string;

	@IsEmail()
	email: string;

	@IsString()
	phone?: string;

	@IsString()
	@Length(2, 10)
	name: string;

	@IsString()
	@Length(0, 500)
	introduce: string;

	@IsInt()
	@Min(1)
	@Max(3)
	gender: number;

	toEntity(): User {
		return new User(this);
	}
}

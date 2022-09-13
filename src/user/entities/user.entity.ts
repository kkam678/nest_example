import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude, Expose, Transform } from 'class-transformer';

@Entity('user2')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	site_key?: number = 31;

	@Column()
	birth?: number = 19890101;

	@Column({ length: 200 })
	account: string;

	@Exclude()
	@Column()
	password: string;

	@Column()
	profile_image: string;

	@Column()
	nickname: string;

	@Column()
	email: string;

	@Column()
	phone?: string;

	@Column()
	name: string;

	@Column()
	introduce: string;

	@Column()
	gender: number;

	constructor(partial: Partial<User>) {
		Object.assign(this, partial);
	}
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		UserModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: '222.239.163.213',
			port: 3306,
			username: 'aa222',
			password: 'qwer3edc',
			database: 'live_renew',
			entities: [User],
			synchronize: false,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

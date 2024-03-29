import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TuitsModule } from './modules/tuits/tuits.module';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TuitsModule,
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'admin',
			password: 'my-weak-password',
			database: 'postgres',
			autoLoadEntities: true,
			synchronize: true
		}),
		UsersModule
	]
})
export class AppModule {
	static port: number;
	constructor(private readonly configService: ConfigService) {
		AppModule.port = +this.configService.get('PORT');
	}
}

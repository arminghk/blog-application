import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CustomConfigModule } from './modules/config/config.module';
import { TypeOrmConfigService } from './config/typeorm.config';
import { PostModule } from './modules/post/post.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    PostModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

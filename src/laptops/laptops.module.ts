import { Module } from '@nestjs/common';
import { LaptopsService } from './laptops.service';
import { LaptopsController } from './laptops.controller';
import { LaptopSchema } from './entities/laptop.entity';
import {MongooseModule} from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';

@Module({
  imports: [MongooseModule.forFeature([{name:'laptop', schema: LaptopSchema}]),MulterModule.register({
    storage:diskStorage({
      destination: './public/json',
      filename: (req, file, cb) => {
        //chance file name :
        cb(null, file.originalname.split('.')[0] + '_' + Date.now() 
        +'.'+ file.originalname.split('.').pop())
      }
    })
  })],
  controllers: [LaptopsController],
  providers: [LaptopsService]
})
export class LaptopsModule {}

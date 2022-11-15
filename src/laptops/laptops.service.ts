import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { UpdateLaptopDto } from './dto/update-laptop.dto';
import { Laptop } from './entities/laptop.entity';

@Injectable()
export class LaptopsService {
  constructor(@InjectModel('laptop') private LaptopSchema:Model<Laptop>){}

async create(data) {
    let newLaptop;
    try {
      newLaptop=await new this.LaptopSchema(data);
      await newLaptop.save();
    } catch (error) {
      throw new Error("erreur lors de l'enregistrement")
    }
    return `laptop enregistrer avec success ${newLaptop.id}`;
  }

  findAll() {
    return `This action returns all laptops`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laptop`;
  }

  update(id: number, updateLaptopDto: UpdateLaptopDto) {
    return `This action updates a #${id} laptop`;
  }

  remove(id: number) {
    return `This action removes a #${id} laptop`;
  }
}

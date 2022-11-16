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
      newLaptop= await new this.LaptopSchema(data);
      await newLaptop.save();
    } catch (error) {
      throw new Error("erreur lors de l'enregistrement")
    }
    return `laptop enregistrer avec success ${newLaptop.id}`;
  }

  async findAll() {
    let laptops;
    try {
      laptops= await this.LaptopSchema.find({
        take:100,
        skip:0
      })
    } catch (error) {
      throw new Error("erreur lors de la recuperation des donnees"); 
    }
    if(!laptops){
      throw new Error("aucun laptop n'a ete trouver")
    }
    return laptops;
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

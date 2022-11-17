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
        brand:"Apple"
      }).skip(10).limit(100)
    } catch (error) {
      throw new Error("erreur lors de la recuperation des donnees"); 
    }
    if(!laptops){
      throw new Error("aucun laptop n'a ete trouver")
    }
    return laptops;
  }

  findOne(id: string) {
    return `This action returns a #${id} laptop`;
  }

  update(id:string) {
    return `This action updates a #${id} laptop`;
  }

  remove(id: string) {
    return `This action removes a #${id} laptop`;
  }

 async filter(params){
    //for search laptops
    let laptops;
    try {
    laptops= await this.LaptopSchema.find(params).limit(100)
    }catch(error){
      throw new Error("erreur lors de la recherche des laptops")
    }
    return laptops
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { LaptopsService } from './laptops.service';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { UpdateLaptopDto } from './dto/update-laptop.dto';
import { FileInterceptor } from '@nestjs/platform-express';
const fs = require('fs')

@Controller('laptops')
export class LaptopsController {
  constructor(private readonly laptopsService: LaptopsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file) {
    console.log(file.path)
    // 1
    let data = await fs.readFileSync
    (`./${file.path}`, 'utf8')
    const laptops = await JSON.parse(data)

    console.log(laptops[0])
    for(let laptop of laptops){
      await this.laptopsService.create(laptop)
    }
    return `tous les donnee sont mis a jour`;
  }

  @Get()
 async findAll() {
    return await this.laptopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laptopsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.laptopsService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laptopsService.remove(id);
  }

  @Post('/filter')
  async filter(@Body() param){
    return await this.laptopsService.filter(param)
  }
} 

import { PartialType } from '@nestjs/mapped-types';
import { CreateLaptopDto } from './create-laptop.dto';

export class UpdateLaptopDto extends PartialType(CreateLaptopDto) {}

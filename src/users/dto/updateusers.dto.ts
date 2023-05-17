import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersDto } from './createusers.dto';
export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
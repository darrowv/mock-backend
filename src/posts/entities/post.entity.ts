import { ApiProperty } from '@nestjs/swagger';
import { Post } from '@prisma/client';

export class PostEntity implements Post {
  @ApiProperty()
  id: number;

  @ApiProperty()
  text: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

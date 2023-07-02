import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  authorId: string;
}

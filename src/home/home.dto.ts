import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: '文章创建标题' })
  @IsNotEmpty({ message: '请填写文章标题' })
  title: string;
  @ApiProperty({ description: '文章创建内容' })
  content: string;
  @ApiProperty({ description: '文章类型' })
  type?: string | number;
  @ApiProperty({ description: '文章封面' })
  img_url?: any;
  @ApiProperty({ description: '文章描述' })
  desc: string;
  @ApiProperty({ description: '文章状态' })
  state?: string;
  @ApiProperty({ description: '作者id' })
  user_id: string;
}

export class UpdatePostDto {
  _id: string | number;
  title: string;
  content: string;
  type?: string;
}

export class LikesPostDto {
  user_id: string;
  article_id: string;
}

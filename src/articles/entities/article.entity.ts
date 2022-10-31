import { Article } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';

export class ArticleEntity implements Article {
  updatedAt: Date;
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updateAt: Date;
}

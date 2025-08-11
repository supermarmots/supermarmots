import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BlogController } from "./blog.controller";
import { BlogService } from "./blog.service";
import { BlogFileRepository, BlogMonogoRepository } from "./blog.repository";
import { Blog, BlogSchema } from "./blog.schema";

@Module({
  imports: [
    MongooseModule.forRoot(""),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMonogoRepository],
})
export class AppModule {}

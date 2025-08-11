import { Injectable } from "@nestjs/common";
import { PostDto } from "./blog.model";
import { BlogMonogoRepository } from "./blog.repository";

@Injectable()
export class BlogService {
  constructor(private blogRepository: BlogMonogoRepository) {}

  posts = [];

  async getAllPosts() {
    return await this.blogRepository.getAllPost();
  }

  createPost(postDto: PostDto) {
    this.blogRepository.createPost(postDto);
  }

  async getPost(id): Promise<PostDto | undefined> {
    return await this.blogRepository.getPost(id);
  }

  delete(id) {
    this.blogRepository.deletePost(id);
  }

  updatePost(id, postDto: PostDto) {
    this.blogRepository.updatePost(id, postDto);
  }
}

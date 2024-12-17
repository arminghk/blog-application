import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  async create(post: Partial<Post>) {
    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }

  async update(id: number, post: Partial<Post>) {
    const existingPost = await this.postRepository.findOneBy({ id });
    if (!existingPost) {
      throw new NotFoundException('Post not found');
    }
    Object.assign(existingPost, post);
    return this.postRepository.save(existingPost);
  }

  async remove(id: number) {
    const existingPost = await this.postRepository.findOneBy({ id });
    if (!existingPost) {
      throw new NotFoundException('Post not found');
    }
    return this.postRepository.remove(existingPost);
  }
}

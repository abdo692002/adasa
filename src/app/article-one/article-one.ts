import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-article-one',
  imports: [RouterLink],
  templateUrl: './article-one.html',
  styleUrl: './article-one.css',
})
export class ArticleOne implements OnInit {
  post?: Post;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.post = this.postsService.getPostByIndex(0);
  }
}

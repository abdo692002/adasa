import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-article-two',
  imports: [RouterLink],
  templateUrl: './article-two.html',
  styleUrl: './article-two.css',
})
export class ArticleTwo implements OnInit {
  post?: Post;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.post = this.postsService.getPostByIndex(1);
  }
}

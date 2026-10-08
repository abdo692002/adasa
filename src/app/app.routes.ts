import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { NotFoundPage } from './not-found-page/not-found-page';
import { FromUs } from './from-us/from-us';
import { ArticleOne } from './article-one/article-one';
import { ArticleThree } from './article-three/article-three';
import { ArticleTwo } from './article-two/article-two';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Lens – Photography World' },
  { path: 'blog', component: Blog, title: 'Blog | مدونة' , children: [

    {path: 'article-one', component: ArticleOne, title: 'Article One | المقالة الأولى'},
    {path: 'article-two', component: ArticleTwo, title: 'Article Two | المقالة الثانية'},
    {path: 'article-three', component: ArticleThree, title: 'Article Three | المقالة الثالثة'},
  ]},
  { path: 'fromUs', component: FromUs, title: 'من نحن | عدسة' },
  { path: 'notfound', component: NotFoundPage, title: 'notFound | غير معرف' },
  { path: '**', redirectTo: 'notfound' },

]




import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { NotFoundPage } from './not-found-page/not-found-page';
import { FromUs } from './from-us/from-us';

export const routes: Routes = [
{path:``, redirectTo:"home", pathMatch:'full'},
{path:`home`, component: Home, title: `Lens – Photography World` },
{path:`blog`, component: Blog, title: 'Blog | مدونة'},
{path:`fromUs`, component: FromUs, title: 'from-US | من نحن'},
{path:"notfound", component: NotFoundPage, title:`notFound | غير معرف`},
{path:"**", redirectTo: 'notfound'},
];

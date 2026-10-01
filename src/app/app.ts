import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { FromUs } from './from-us/from-us';
import { Blog } from './blog/blog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer,Home,FromUs,Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    ngOnInit(): void {
    initFlowbite();
  }
}

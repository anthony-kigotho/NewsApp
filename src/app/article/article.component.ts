import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input()
  article!: Article;

  constructor() {}
}
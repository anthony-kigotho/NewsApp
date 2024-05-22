import { Injectable } from '@angular/core';
import { Article } from './article'; 

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articles: Article[] = [
    { 
      title: 'Article 1', 
      imageUrl: 'https://source.unsplash.com/300x300', 
      comments: ['Article 1 Comment 1', 'Article 1 Comment 2', 'Article 1 Comment 3'] 
    },
    { 
      title: 'Article 2', 
      imageUrl: 'https://source.unsplash.com/300x300', 
      comments: ['Article 2 Comment 1', 'Article 2 Comment 2', 'Article 2 Comment 3'] 
    },
    { 
      title: 'Article 3', 
      imageUrl: 'https://source.unsplash.com/300x300', 
      comments: ['Article 3 Comment 1', 'Article 3 Comment 2', 'Article 3 Comment 3'] 
    },
    // Add more articles as needed
  ];

  constructor() {}

  getArticles(): Article[] {
    // Simulate fetching articles from an API
    return this.articles;
  }
}

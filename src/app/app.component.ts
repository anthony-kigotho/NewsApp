import { Component } from '@angular/core';
import { NewsComponent } from './news/news.component';
import { CheckForUpdateService } from './check-for-update.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewsComponent],
  providers: [CheckForUpdateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'news-app';
  constructor(public checkForUpdateService: CheckForUpdateService){}
}
import { Component, ViewChild } from '@angular/core';
import { HackerNewsService } from './service/hacker-news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headlineIds: Array<number> = [];
  loadedStories: Array<string> = [];
  loadLimit = 50;
  moreAvailable = true;

  constructor(private hackerNewsService: HackerNewsService) {
    this.setHeadlineIds();
  }
  setHeadlineIds() {
    this.hackerNewsService.getContent()
      .subscribe((data: Array<number>) => {
        this.headlineIds = data;
        this.populateStories(this.headlineIds.splice(0, this.loadLimit));
      });
  }
  populateStories(batchIds: Array<number>) {
    batchIds.forEach((id) => {
      this.hackerNewsService.getStory(id).subscribe((storyResponse) => {
        this.loadedStories.push(storyResponse);
      });
    });
  }
  loadMore() {
    this.populateStories(this.headlineIds.splice( 0, this.loadLimit));
    if (this.headlineIds.length === 0) {
      this.moreAvailable = false;
    } else if (this.headlineIds.length < this.loadLimit) {
      this.loadLimit = this.headlineIds.length;
    }
  }
}

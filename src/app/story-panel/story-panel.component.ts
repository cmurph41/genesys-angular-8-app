import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-story-panel',
  templateUrl: './story-panel.component.html',
  styleUrls: ['./story-panel.component.css']
})
export class StoryPanelComponent {

  constructor() { }

  @Input()
  stories: Array<string>;

  @Input()
  moreAvailable: boolean;

  @Output()
  loadMoreEvent = new EventEmitter();

  loadMoreStories() {
    this.loadMoreEvent.emit('load more stories');
  }
}

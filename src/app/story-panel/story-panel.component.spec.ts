import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryPanelComponent } from './story-panel.component';
import { TimeagoModule } from 'ngx-timeago';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';
import { By } from '@angular/platform-browser';

describe('StoryPanelComponent', () => {

  let component: StoryPanelComponent;
  let fixture: ComponentFixture<StoryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StoryPanelComponent
      ],
      imports: [
        TimeagoModule.forRoot(),
        MatListModule,
        MatExpansionModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(StoryPanelComponent);
    component = fixture.componentInstance;
    component.moreAvailable = true;
    fixture.detectChanges();
  });

  it('should create the story-panel', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadMoreStories() when button clicked', async(() => {
    spyOn(component, 'loadMoreStories');
    fixture.debugElement.nativeElement.querySelector('#show-more-button').click();
    fixture.whenStable().then(() => {
      expect(component.loadMoreStories).toHaveBeenCalled();
    });
  }));

});

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StoryPanelComponent } from './story-panel/story-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { TimeagoModule } from 'ngx-timeago';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StoryPanelComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        TimeagoModule.forRoot(),
        MatListModule,
        MatExpansionModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render header1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Claire\'s version of HackerNews');
  });
});

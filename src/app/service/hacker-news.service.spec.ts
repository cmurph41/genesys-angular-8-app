import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));
  it('should be created', () => {
    const service: HackerNewsService = TestBed.get(HackerNewsService);
    expect(service).toBeTruthy();
  });

  it('getContent should return the string array matching assets/topStories.json',
    (done: DoneFn) => {
      const service: HackerNewsService = TestBed.get(HackerNewsService);
      service.getContent().subscribe(value => {
        expect(value).toEqual([22899353, 22899353, 22899353, 22899353, 22899353, 22899353]);
        done();
      });
    });

  it('getStory should return the title of the 22899353 story in assets/22899353.json',
    (done: DoneFn) => {
      const service: HackerNewsService = TestBed.get(HackerNewsService);
      service.getStory(22899353).subscribe(value => {
        expect(value.title).toEqual('This is a dummy story to use for dev and testing purposes');
        done();
      });
    });
});

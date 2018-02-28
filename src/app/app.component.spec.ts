import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { DdeDashboardComponent } from './dde-dashboard/dde-dashboard.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DdeApiService } from './services/dde-api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        BsDropdownModule.forRoot()
      ],
      declarations: [
        AppComponent,
        AppNavbarComponent,
        DdeDashboardComponent
      ],
      providers: [
        DdeApiService
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  /*
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});

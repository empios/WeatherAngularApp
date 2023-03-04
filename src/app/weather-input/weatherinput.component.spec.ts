import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherinputComponent} from './weatherinput.component';

describe('WeatherinputComponent', () => {
  let component: WeatherinputComponent;
  let fixture: ComponentFixture<WeatherinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherinputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WeatherinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MauiComponent } from './maui.component';

describe('MauiComponent', () => {
  let component: MauiComponent;
  let fixture: ComponentFixture<MauiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MauiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MauiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

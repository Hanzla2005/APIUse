import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommuityPage } from './commuity.page';

describe('CommuityPage', () => {
  let component: CommuityPage;
  let fixture: ComponentFixture<CommuityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

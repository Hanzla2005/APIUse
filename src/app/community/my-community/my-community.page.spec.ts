import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCommunityPage } from './my-community.page';

describe('MyCommunityPage', () => {
  let component: MyCommunityPage;
  let fixture: ComponentFixture<MyCommunityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCommunityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

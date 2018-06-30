import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterContentComponent } from './master-content.component';

describe('MasterContentComponent', () => {
  let component: MasterContentComponent;
  let fixture: ComponentFixture<MasterContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

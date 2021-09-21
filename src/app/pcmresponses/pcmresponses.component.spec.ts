import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcmresponsesComponent } from './pcmresponses.component';

describe('PcmresponsesComponent', () => {
  let component: PcmresponsesComponent;
  let fixture: ComponentFixture<PcmresponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcmresponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmresponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPassageiroComponent } from './consultar-passageiro.component';

describe('ConsultarPassageiroComponent', () => {
  let component: ConsultarPassageiroComponent;
  let fixture: ComponentFixture<ConsultarPassageiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPassageiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

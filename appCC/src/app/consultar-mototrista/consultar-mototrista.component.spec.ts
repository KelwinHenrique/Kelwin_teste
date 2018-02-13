import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMototristaComponent } from './consultar-mototrista.component';

describe('ConsultarMototristaComponent', () => {
  let component: ConsultarMototristaComponent;
  let fixture: ComponentFixture<ConsultarMototristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarMototristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMototristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

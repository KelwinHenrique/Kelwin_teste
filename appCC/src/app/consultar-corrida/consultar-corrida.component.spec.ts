import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCorridaComponent } from './consultar-corrida.component';

describe('ConsultarCorridaComponent', () => {
  let component: ConsultarCorridaComponent;
  let fixture: ComponentFixture<ConsultarCorridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarCorridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

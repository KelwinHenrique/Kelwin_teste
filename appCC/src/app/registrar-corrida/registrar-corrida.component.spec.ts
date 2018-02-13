import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCorridaComponent } from './registrar-corrida.component';

describe('RegistrarCorridaComponent', () => {
  let component: RegistrarCorridaComponent;
  let fixture: ComponentFixture<RegistrarCorridaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarCorridaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMototristaComponent } from './cad-mototrista.component';

describe('CadMototristaComponent', () => {
  let component: CadMototristaComponent;
  let fixture: ComponentFixture<CadMototristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadMototristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadMototristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

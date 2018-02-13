import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPassageiroComponent } from './cad-passageiro.component';

describe('CadPassageiroComponent', () => {
  let component: CadPassageiroComponent;
  let fixture: ComponentFixture<CadPassageiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadPassageiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

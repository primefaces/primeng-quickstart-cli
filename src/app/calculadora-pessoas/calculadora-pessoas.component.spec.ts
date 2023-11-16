import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraPessoasComponent } from './calculadora-pessoas.component';

describe('CalculadoraPessoasComponent', () => {
  let component: CalculadoraPessoasComponent;
  let fixture: ComponentFixture<CalculadoraPessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraPessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

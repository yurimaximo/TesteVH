import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoModalidadeComponent } from './selecao-modalidade.component';

describe('SelecaoModalidadeComponent', () => {
  let component: SelecaoModalidadeComponent;
  let fixture: ComponentFixture<SelecaoModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecaoModalidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

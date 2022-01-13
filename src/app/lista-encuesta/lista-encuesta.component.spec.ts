import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncuestaComponent } from './lista-encuesta.component';

describe('CarritoComponent', () => {
  let component: ListaEncuestaComponent;
  let fixture: ComponentFixture<ListaEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

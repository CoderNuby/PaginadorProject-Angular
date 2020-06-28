import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRegistrosComponent } from './pagina-registros.component';

describe('PaginaRegistrosComponent', () => {
  let component: PaginaRegistrosComponent;
  let fixture: ComponentFixture<PaginaRegistrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRegistrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

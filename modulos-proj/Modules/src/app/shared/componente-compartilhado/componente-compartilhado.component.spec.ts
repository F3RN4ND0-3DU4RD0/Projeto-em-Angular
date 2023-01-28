import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCompartilhadoComponent } from './componente-compartilhado.component';

describe('ComponenteCompartilhadoComponent', () => {
  let component: ComponenteCompartilhadoComponent;
  let fixture: ComponentFixture<ComponenteCompartilhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCompartilhadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCompartilhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

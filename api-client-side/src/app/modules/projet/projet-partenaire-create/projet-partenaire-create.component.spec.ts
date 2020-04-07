import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetPartenaireCreateComponent } from './projet-partenaire-create.component';

describe('ProjetPartenaireCreateComponent', () => {
  let component: ProjetPartenaireCreateComponent;
  let fixture: ComponentFixture<ProjetPartenaireCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetPartenaireCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetPartenaireCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

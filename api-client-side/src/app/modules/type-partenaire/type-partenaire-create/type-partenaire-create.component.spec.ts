import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypePartenaireCreateComponent} from './type-partenaire-create.component';

describe('TypePartenaireCreateComponent', () => {
    let component: TypePartenaireCreateComponent;
    let fixture: ComponentFixture<TypePartenaireCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypePartenaireCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypePartenaireCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypePartenaireComponent} from './type-partenaire.component';

describe('TypePartenaireComponent', () => {
    let component: TypePartenaireComponent;
    let fixture: ComponentFixture<TypePartenaireComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypePartenaireComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypePartenaireComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

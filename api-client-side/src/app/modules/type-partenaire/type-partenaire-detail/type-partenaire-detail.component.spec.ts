import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypePartenaireDetailComponent} from './type-partenaire-detail.component';

describe('TypePartenaireDetailComponent', () => {
    let component: TypePartenaireDetailComponent;
    let fixture: ComponentFixture<TypePartenaireDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypePartenaireDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypePartenaireDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

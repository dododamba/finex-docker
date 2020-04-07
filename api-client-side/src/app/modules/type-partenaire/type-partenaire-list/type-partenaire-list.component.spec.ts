import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypePartenaireListComponent} from './type-partenaire-list.component';

describe('TypePartenaireListComponent', () => {
    let component: TypePartenaireListComponent;
    let fixture: ComponentFixture<TypePartenaireListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypePartenaireListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypePartenaireListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

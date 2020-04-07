import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupeTravailUpdateComponent} from './groupe-travail-update.component';

describe('GroupeTravailUpdateComponent', () => {
    let component: GroupeTravailUpdateComponent;
    let fixture: ComponentFixture<GroupeTravailUpdateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GroupeTravailUpdateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GroupeTravailUpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MesTachesDetailComponent} from './mes-taches-detail.component';

describe('MesTachesDetailComponent', () => {
    let component: MesTachesDetailComponent;
    let fixture: ComponentFixture<MesTachesDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MesTachesDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MesTachesDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

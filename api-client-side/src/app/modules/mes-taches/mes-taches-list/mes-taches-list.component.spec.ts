import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MesTachesListComponent} from './mes-taches-list.component';

describe('MesTachesListComponent', () => {
    let component: MesTachesListComponent;
    let fixture: ComponentFixture<MesTachesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MesTachesListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MesTachesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

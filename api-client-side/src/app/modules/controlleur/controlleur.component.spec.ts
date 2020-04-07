import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ControlleurComponent} from './controlleur.component';

describe('ControlleurComponent', () => {
    let component: ControlleurComponent;
    let fixture: ComponentFixture<ControlleurComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ControlleurComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ControlleurComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

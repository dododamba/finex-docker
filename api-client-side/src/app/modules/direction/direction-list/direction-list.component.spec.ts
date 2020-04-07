import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DirectionListComponent} from './direction-list.component';

describe('DirectionListComponent', () => {
    let component: DirectionListComponent;
    let fixture: ComponentFixture<DirectionListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DirectionListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DirectionCreateComponent} from './direction-create.component';

describe('DirectionCreateComponent', () => {
    let component: DirectionCreateComponent;
    let fixture: ComponentFixture<DirectionCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DirectionCreateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectionCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

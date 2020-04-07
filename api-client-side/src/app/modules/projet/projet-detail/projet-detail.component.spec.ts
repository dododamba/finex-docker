import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjetDetailComponent} from './projet-detail.component';

describe('ProjetDetailComponent', () => {
    let component: ProjetDetailComponent;
    let fixture: ComponentFixture<ProjetDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProjetDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjetDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

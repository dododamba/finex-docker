import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypeFinancementComponent} from './type-financement.component';

describe('TypeFinancementComponent', () => {
    let component: TypeFinancementComponent;
    let fixture: ComponentFixture<TypeFinancementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeFinancementComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeFinancementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

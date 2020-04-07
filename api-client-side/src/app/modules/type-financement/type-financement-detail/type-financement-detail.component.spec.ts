import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypeFinancementDetailComponent} from './type-financement-detail.component';

describe('TypeFinancementDetailComponent', () => {
    let component: TypeFinancementDetailComponent;
    let fixture: ComponentFixture<TypeFinancementDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeFinancementDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeFinancementDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

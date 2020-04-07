import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TypeFinancementUpdateComponent} from './type-financement-update.component';

describe('TypeFinancementUpdateComponent', () => {
    let component: TypeFinancementUpdateComponent;
    let fixture: ComponentFixture<TypeFinancementUpdateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TypeFinancementUpdateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypeFinancementUpdateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

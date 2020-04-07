import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appFlatMenu]'
})
export class FlatMenuDirective {
    @HostBinding('class.active') isOpen = false;

    constructor() {
    }

    @HostListener('click') toggleOpen($event) {
        this.isOpen = !this.isOpen;
    }

}

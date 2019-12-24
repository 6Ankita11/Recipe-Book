import { Directive, HostBinding, HostListener }from '@angular/core';
@Directive({
    selector: '[app-Dropdown]'
})
export class DropDownDirective{
    @HostBinding ('class.open') isOpen = false;

    @HostListener('click') toggle(){
        this.isOpen = !this.isOpen;
    }
}
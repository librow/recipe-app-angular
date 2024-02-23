import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter();
  
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}

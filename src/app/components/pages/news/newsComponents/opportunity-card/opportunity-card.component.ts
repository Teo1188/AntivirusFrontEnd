import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.css']
})
export class OpportunityCardComponent {
  @Input() title: string = '';
  @Input() institucion: string = '';
  @Input() description: string = '';
  @Input() url: string = '';
}

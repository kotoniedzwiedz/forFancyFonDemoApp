import { Component } from '@angular/core';
import { trigger, transition, query, style, group, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('* => *, :enter', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
        query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

        group([
          query(':leave', [
            animate('800ms ease-in-out', style({
              transform: 'translateX(100vw)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('800ms ease-in-out', style({
              transform: 'translateY(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})

export class AppComponent {
  title = 'forFancyFonDemoApp';

  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }

}

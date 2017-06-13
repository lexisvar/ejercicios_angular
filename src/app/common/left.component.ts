import { Component } from '@angular/core';

@Component({
    selector : 'app-left-navigation',
    template : `
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <h1>{{title}}</h1>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
    </div>`,
    styleUrls : [
        './left.component.css'
    ]
})

export class LeftComponent {
    title: string = 'News';
    items: Array<string> = ['New','New #2'];
}
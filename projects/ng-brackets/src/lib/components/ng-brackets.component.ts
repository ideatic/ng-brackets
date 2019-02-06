import {Component, ContentChild, HostBinding, Input, TemplateRef} from '@angular/core';

export interface NgBracketsRound {
    name: string;
    fixtures: NgBracketsFixture[];
}

export interface NgBracketsFixture {
    caption: string;
    home: { name: string, score: number };
    away: { name: string, score: number };
}

@Component({
    selector: 'ng-brackets',
    templateUrl: './ng-brackets.component.html',
    styleUrls: ['./ng-brackets.component.less']
})
export class NgBracketsComponent {


    @Input() public rounds: NgBracketsRound[];

    @HostBinding('class.rounded')
    @Input() public rounded = true;


    @ContentChild('fixtureTemplate') fixtureTemplate: TemplateRef<any>;

    constructor() {
    }

    public isStraightLine(i: number) { // Straight line when next round has the same number of fixtures as the current one
        const currentRound = this.rounds[i];
        return currentRound && this.rounds[i + 1] && currentRound.fixtures.length == this.rounds[i + 1].fixtures.length;
    }
}
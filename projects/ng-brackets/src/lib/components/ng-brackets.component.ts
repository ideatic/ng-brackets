import {Component, ContentChild, HostBinding, Input, TemplateRef} from '@angular/core';

export interface NgBracketsRound {
  name: string;
  className?: string;
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
  @Input() public rounded = true;
  @Input() public mode: 'brackets' | 'list' = 'brackets';
  @Input() public fixtureHeight: number;


  @ContentChild('fixtureTemplate', {static: false}) fixtureTemplate: TemplateRef<any>;
  @ContentChild('roundTitleTemplate', {static: false}) roundTitleTemplate: TemplateRef<any>;

  constructor() {
  }


  @HostBinding('class')
  public get classes(): string {
    return (this.rounded ? 'rounded ' : '') + this.mode;
  }

  public isStraightLine(roundIndex: number) { // Straight line when next round has the same number of fixtures as the current one
    const currentRound = this.rounds[roundIndex];
    return currentRound
      && this.rounds[roundIndex + 1]
      && currentRound.fixtures.length <= this.rounds[roundIndex + 1].fixtures.length;
  }

  public calculateRoundHeightFactor(round: NgBracketsRound): number {
    if (this.mode == 'list' || !this.fixtureHeight) {
      return null;
    }

    let maxFixtures = 0;
    for (const r of this.rounds) {
      maxFixtures = Math.max(r.fixtures.length, maxFixtures);
    }

    return maxFixtures / round.fixtures.length;
  }
}

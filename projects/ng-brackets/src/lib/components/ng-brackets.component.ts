import {NgTemplateOutlet} from "@angular/common";
import {ChangeDetectionStrategy, Component, contentChild, HostBinding, Input, TemplateRef} from '@angular/core';

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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
  templateUrl: './ng-brackets.component.html',
  styleUrl: './ng-brackets.component.less'
})
export class NgBracketsComponent {
  @Input() public rounds: NgBracketsRound[];
  @Input() public rounded = true;
  @Input() public mode: 'brackets' | 'list' = 'brackets';
  @Input() public fixtureHeight: number;

  protected fixtureTemplate = contentChild.required('fixtureTemplate', {read: TemplateRef});
  protected roundTitleTemplate = contentChild.required('roundTitleTemplate', {read: TemplateRef});

  @HostBinding('class')
  private get _classes(): string {
    return (this.rounded ? 'rounded ' : '') + this.mode;
  }

  protected isStraightLine(roundIndex: number) { // Straight line when next round has the same number of fixtures as the current one
    const currentRound = this.rounds[roundIndex];
    return currentRound
      && this.rounds[roundIndex + 1]
      && currentRound.fixtures.length <= this.rounds[roundIndex + 1].fixtures.length;
  }

  protected calculateRoundHeightFactor(round: NgBracketsRound): number {
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

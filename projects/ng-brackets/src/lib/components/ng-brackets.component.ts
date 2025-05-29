import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  HostBinding,
  input,
  TemplateRef
} from '@angular/core';

export interface NgBracketsRound {
  name: string;
  className?: string;
  fixtures: NgBracketsFixture[];
}

export interface NgBracketsFixture {
  caption: string;
  home: { name: string; score: number };
  away: { name: string; score: number };
}

@Component({
  selector: 'ng-brackets',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
  templateUrl: './ng-brackets.component.html',
  styleUrl: './ng-brackets.component.less'
})
export class NgBracketsComponent {
  public readonly rounds = input<NgBracketsRound[]>();
  public readonly rounded = input(true);
  public readonly mode = input<'brackets' | 'list'>('brackets');
  public readonly fixtureHeight = input<number>();

  protected readonly fixtureTemplate = contentChild.required(
    'fixtureTemplate',
    { read: TemplateRef }
  );
  protected readonly roundTitleTemplate = contentChild.required(
    'roundTitleTemplate',
    { read: TemplateRef }
  );

  @HostBinding('class')
  private get _classes(): string {
    return (this.rounded() ? 'rounded ' : '') + this.mode();
  }

  protected isStraightLine(roundIndex: number) {
    // Straight line when next round has the same number of fixtures as the current one
    const currentRound = this.rounds()[roundIndex];
    return (
      currentRound &&
      this.rounds()[roundIndex + 1] &&
      currentRound.fixtures.length <=
        this.rounds()[roundIndex + 1].fixtures.length
    );
  }

  protected calculateRoundHeightFactor(round: NgBracketsRound): number {
    if (this.mode() == 'list' || !this.fixtureHeight()) {
      return null;
    }

    let maxFixtures = 0;
    for (const r of this.rounds()) {
      maxFixtures = Math.max(r.fixtures.length, maxFixtures);
    }

    return maxFixtures / round.fixtures.length;
  }
}

import {Component, OnInit} from '@angular/core';
import {NgBracketsRound} from "../../projects/ng-brackets/src/lib/components/ng-brackets.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    public rounds: NgBracketsRound[];
    public rounded = true;
    public bracketsMode = true;

    public customJSON: string = '';

    public ngOnInit(): void {
        this.rounds = this.examples[0];
        this.customJSON = window.localStorage.getItem('ngBracketsCustomJson');

        if (this.customJSON) {
            this.useCustomJSON();
        }
    }

    public useCustomJSON() {
        this.rounds = JSON.parse(this.customJSON);
    }

    public storeCustomJson() {
        window.localStorage.setItem('ngBracketsCustomJson', this.customJSON);
    }

    public examples: NgBracketsRound[][] = [
        // Example 1
        [
            {
                name: 'Quarterfinals',
                fixtures: [
                    {
                        caption: '6 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'France', score: 0}
                    },
                    {
                        caption: '7 February 2019',
                        home: {name: 'England', score: 0},
                        away: {name: 'Belgium', score: 2}
                    },
                    {
                        caption: '8 February 2019',
                        home: {name: 'Germany', score: 1},
                        away: {name: 'Italy', score: 1}
                    },
                    {
                        caption: '9 February 2019',
                        home: {name: 'USA', score: 0},
                        away: {name: 'Russia', score: 0}
                    }
                ]
            },
            {
                name: 'Semifinals',
                fixtures: [
                    {
                        caption: '10 February 2019',
                        home: {name: 'Spain', score: 3},
                        away: {name: 'Belgium', score: 0}
                    },
                    {
                        caption: '11 February 2019',
                        home: {name: 'Germany', score: 1},
                        away: {name: 'USA', score: 1}
                    }
                ]
            },
            {
                name: 'Final',
                fixtures: [
                    {
                        caption: '15 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'Germany', score: 0}
                    }
                ]
            }
        ],
        // Example 2
        [
            {
                name: 'Quarterfinals',
                fixtures: [
                    {
                        caption: '6 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'France', score: 0}
                    },
                    {
                        caption: '7 February 2019',
                        home: {name: 'England', score: 0},
                        away: {name: 'Belgium', score: 2}
                    },
                    {
                        caption: '8 February 2019',
                        home: {name: 'Germany', score: 1},
                        away: {name: 'Italy', score: 1}
                    },
                    {
                        caption: '9 February 2019',
                        home: {name: 'USA', score: 0},
                        away: {name: 'Russia', score: 0}
                    }
                ]
            },
            {
                name: 'Semifinals',
                fixtures: [
                    {
                        caption: '10 February 2019',
                        home: {name: 'Spain', score: 3},
                        away: {name: 'Belgium', score: 0}
                    },
                    {
                        caption: '11 February 2019',
                        home: {name: 'Germany', score: 1},
                        away: {name: 'USA', score: 1}
                    }
                ]
            },
            {
                name: 'Final',
                fixtures: [
                    {
                        caption: '15 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'Germany', score: 0}
                    }
                ]
            },
            {
                name: 'Final',
                fixtures: [
                    {
                        caption: '15 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'Germany', score: 0}
                    }
                ]
            }
        ],
        // Example 3
        [{
            name: 'Semifinals',
            fixtures: [
                {
                    caption: '10 February 2019',
                    home: {name: 'Spain', score: 3},
                    away: {name: 'Belgium', score: 0}
                },
                {
                    caption: '11 February 2019',
                    home: {name: 'Germany', score: 1},
                    away: {name: 'USA', score: 1}
                }
            ]
        },
            {
                name: 'Final',
                fixtures: [
                    {
                        caption: '15 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'Germany', score: 0}
                    }
                ]
            }
        ],// Example 1
        [
            {
                name: 'Round of 8',
                fixtures: [
                    {
                        caption: '6 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'France', score: 0}
                    },
                    {
                        caption: '7 February 2019',
                        home: {name: 'England', score: 0},
                        away: {name: 'Belgium', score: 2}
                    },
                    {
                        caption: '8 February 2019',
                        home: {name: 'Germany', score: 1},
                        away: {name: 'Italy', score: 1}
                    },
                    {
                        caption: '9 February 2019',
                        home: {name: 'USA', score: 0},
                        away: {name: 'Russia', score: 0}
                    },
                    {
                        caption: '6 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'France', score: 0}
                    },
                    {
                        caption: '7 February 2019',
                        home: {name: 'England', score: 0},
                        away: {name: 'Belgium', score: 2}
                    },
                    {
                        caption: '8 February 2019',
                        home: {name: 'Germany', score: 1},
                        away: {name: 'Italy', score: 1}
                    },
                    {
                        caption: '9 February 2019',
                        home: {name: 'USA', score: 0},
                        away: {name: 'Russia', score: 0}
                    }
                ]
            }, {
            name: 'Quarterfinals',
            fixtures: [
                {
                    caption: '6 February 2019',
                    home: {name: 'Spain', score: 1},
                    away: {name: 'France', score: 0}
                },
                {
                    caption: '7 February 2019',
                    home: {name: 'England', score: 0},
                    away: {name: 'Belgium', score: 2}
                },
                {
                    caption: '8 February 2019',
                    home: {name: 'Germany', score: 1},
                    away: {name: 'Italy', score: 1}
                },
                {
                    caption: '9 February 2019',
                    home: {name: 'USA', score: 0},
                    away: {name: 'Russia', score: 0}
                }
            ]
        },
            {
                name: 'Semifinals',
                fixtures: [
                    {
                        caption: '10 February 2019',
                        home: {name: 'Spain', score: 3},
                        away: {name: 'Belgium', score: 0}
                    },
                    {
                        caption: '11 February 2019',
                        home: {name: 'Germany', score: 1},
                        away: {name: 'USA', score: 1}
                    }
                ]
            },
            {
                name: 'Final',
                fixtures: [
                    {
                        caption: '15 February 2019',
                        home: {name: 'Spain', score: 1},
                        away: {name: 'Germany', score: 0}
                    }
                ]
            }
        ]
    ];
}

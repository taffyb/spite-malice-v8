import { trigger, state, style, transition, animate} from '@angular/animations';

export const Animations = [
    trigger('movecard', [
        state('startpos', style({
            top: '{{top}}px',
            left: '{{left}}px',
            visivility:'visible'
        }),  {params: {top: 1,left:1}}),
        state('endpos',   style({
            top: '{{top}}px',
            left: '{{left}}px'
        }),  {params: {top: 1,left:1}}),
        transition('startpos => endpos', animate('500ms ease-in'))
    ])
]
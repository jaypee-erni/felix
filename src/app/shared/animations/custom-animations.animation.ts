import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from '@angular/animations';

/**
 * Library for custom animations
 * how to use: call the trigger name on the element to be animated eg: <div [@slideLeft]="toggle"></div>
 * @param toggle is a user defined variable holding the current state of the animation eg: active/inactive
 */
export class CustomAnimations {
    static animations = CustomAnimations.getAnimations();

    static getAnimations(): Array<AnimationTriggerMetadata> {
        return [
            trigger('slideLeft', [
                state('active',
                    style({
                        marginLeft: '-428px',
                        opacity: '0',
                    })
                ),
                state('inactive',
                    style({
                        marginLeft: '0',
                        opacity: '1',
                    })
                ),
                transition('active => inactive', animate('400ms ease-in-out')),
                transition('inactive => active', animate('500ms ease-in-out')),
            ]),

            trigger('showHide', [
                state('active',
                    style({
                        opacity: '1',
                    })
                ),
                state('inactive',
                    style({
                        opacity: '0',
                    })
                ),
                transition('active => inactive', animate('400ms ease-in-out')),
                transition('inactive => active', animate('500ms ease-in-out')),
            ]),
        ];
    }
}
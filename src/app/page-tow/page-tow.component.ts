import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-page-tow',
    templateUrl: './page-tow.component.html',
    styleUrls: ['./page-tow.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTowComponent implements OnInit {

    ngOnInit(): void { }

}

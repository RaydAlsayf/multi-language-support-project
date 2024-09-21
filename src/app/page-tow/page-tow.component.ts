import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { NavigationService } from '../services/language/navigation.service';

@Component({
    selector: 'app-page-tow',
    templateUrl: './page-tow.component.html',
    styleUrls: ['./page-tow.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTowComponent implements OnInit {

    constructor(private navigationService: NavigationService) { }

    ngOnInit(): void { }

    navigateToHome() {
        this.navigationService.navigate(['home']);
    }

    

}

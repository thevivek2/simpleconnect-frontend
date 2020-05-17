import {Component, OnInit} from '@angular/core';
import {ProviderService} from "./provider.service";

@Component({
    selector: 'app-lookup',
    templateUrl: './provider.component.html'
})
export class ProviderComponent implements OnInit {

    constructor(service: ProviderService) {
    }

    ngOnInit(): void {

    }


}

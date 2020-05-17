import {Component, OnInit} from '@angular/core';
import {LookupService} from "./lookup.service";
import {LookupResponse} from "../../openapi";

@Component({
    selector: 'app-lookup',
    templateUrl: './lookup.component.html'
})
export class LookupComponent implements OnInit {

    lookups: Array<LookupResponse>;

    constructor(protected service: LookupService) {
    }

    ngOnInit(): void {
        this.service.query().subscribe((response) => this.lookups = response.content || [])
    }


}

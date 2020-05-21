import {Component, OnInit} from "@angular/core";
import {ProviderService} from "./provider.service";
import {ProviderResponse} from "../../../openapi";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-provider-detail',
    templateUrl: './provider.detail.component.html'
})
export class ProviderDetailComponent implements OnInit {

    provider: ProviderResponse;
    providerId: string;

    constructor(private service: ProviderService, private activatedRoute: ActivatedRoute) {


    }

    ngOnInit(): void {
        this.providerId = this.activatedRoute.snapshot.paramMap.get('id');
        console.log('proiiid' + this.providerId);
        this.service.find(this.providerId).subscribe((response) => this.provider = response);
    }

}
import {Component, OnInit} from '@angular/core';
import {ProviderService} from "./provider.service";
import {ConsumerRequest, ProviderResponse} from "../../../openapi";
import {ConsumerService} from "../consumer/consumer.service";

@Component({
    selector: 'app-lookup',
    templateUrl: './provider.component.html'
})
export class ProviderComponent implements OnInit {

    providers: Array<ProviderResponse>;

    constructor(private service: ProviderService, private consumerService: ConsumerService) {
    }

    ngOnInit(): void {
        this.service.query().subscribe((response) => this.providers = response.content || [])
    }


    markInterested(uuid: string) {
        this.consumerService.save(this.map(uuid)).subscribe((response) => console.log(response))
    }

    map(uuid: string): ConsumerRequest {
        return {consumes: {uuid: uuid!}}
    }
}

import {Component, OnInit} from '@angular/core';
import {ProviderService} from "./provider.service";
import {ConsumerRequest, PageModel, ProviderResponse} from "../../../openapi";
import {ConsumerService} from "../consumer/consumer.service";

@Component({
    selector: 'app-lookup',
    templateUrl: './provider.component.html'
})
export class ProviderComponent implements OnInit {

    providers: Array<ProviderResponse>;
    pageInfo: PageModel;

    constructor(private service: ProviderService, private consumerService: ConsumerService, private providerService: ProviderService) {
    }

    ngOnInit(): void {
      this.loadProviders();
    }

    loadProviders(): void{
        this.service.query().subscribe((response) => {
            this.providers = response.content || [];
            this.pageInfo = response.pageInfo;
            } )
    }


    markInterested(uuid: string, index: number) {
        this.consumerService.save(this.map(uuid)).subscribe((response) => console.log(response))
        this.providerService.find(uuid).subscribe((response) => this.providers[index] = response);
    }

    map(providerId: string): ConsumerRequest {
        return {consumes: providerId}
    }

    search(value: string): void {
        if(!value){
            return this.loadProviders();
        }
        this.service.search(value).subscribe((response) => this.providers = response.content || [])
    }
}

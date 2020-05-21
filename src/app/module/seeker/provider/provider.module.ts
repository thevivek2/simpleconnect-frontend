import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProviderComponent} from "./provider.component";
import {providerRoutes} from "./provider.router";
import {ProviderUpdateComponent} from "./provider.update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../../components/components.module";
import {ProviderDetailComponent} from "./provider.detail.component";

@NgModule({
  imports: [RouterModule.forChild(providerRoutes), ReactiveFormsModule, CommonModule, ComponentsModule],
  declarations: [ProviderComponent, ProviderUpdateComponent, ProviderDetailComponent],
})
export class ProviderModule {
}

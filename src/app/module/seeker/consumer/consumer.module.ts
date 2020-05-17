import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ConsumerUpdateComponent} from "./consumer.update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {consumerRouter} from "./consumer.router";

@NgModule({
    imports: [RouterModule.forChild(consumerRouter), ReactiveFormsModule, CommonModule],
    declarations: [ConsumerUpdateComponent],
})
export class ConsumerModule {
}

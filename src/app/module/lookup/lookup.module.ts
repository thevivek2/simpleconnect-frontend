import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LookupComponent} from "./lookup.component";
import {lookupRoutes} from "./lookup.router";
import {LookupUpdateComponent} from "./lookup.update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ComponentsModule} from "../../components/components.module";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
    imports: [RouterModule.forChild(lookupRoutes), ReactiveFormsModule, CommonModule, ComponentsModule, CKEditorModule],
    declarations: [LookupComponent, LookupUpdateComponent],
})
export class LookupModule {
}

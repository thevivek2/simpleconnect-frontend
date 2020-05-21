import {Component} from '@angular/core';
import {ConsumerService} from "./consumer.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ConsumerResponse} from "../../../openapi";

@Component({
    selector: 'app-lookup-update',
    templateUrl: './consumer.update.component.html'
})
export class ConsumerUpdateComponent {
    isSaving = false;

    editForm = this.fb.group({
        name: [null, [Validators.required]],
        address: [null, [Validators.required]],
        reference: [null]
    });

    constructor(protected service: ConsumerService, private fb: FormBuilder, private router: Router) {
    }

    previousState(): void {
    }

    save(): void {
        this.isSaving = true;
    }


    protected subscribeToSaveResponse(result: Observable<ConsumerResponse>): void {
        result.subscribe(
            () => this.onSaveSuccess(),
            () => this.onSaveError()
        );
    }

    protected onSaveSuccess(): void {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError(): void {
        this.isSaving = false;
        alert('got some error response')
    }

    private onFail(response: any): void {

    }

    protected getColumnDef(): any {
        const cols = [
            {headerName: 'Category', field: 'category'},
            {headerName: 'Code', field: 'code', checkboxSelection: true},
            {headerName: 'Description', field: 'description'},
            {headerName: 'Additional Info', field: 'additionalInfo'}
        ];
        return cols;
    }

}

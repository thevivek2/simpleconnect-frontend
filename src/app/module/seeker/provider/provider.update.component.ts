import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {ProviderService} from "./provider.service";
import {ProviderRequest, ProviderResponse} from "../../../openapi";

@Component({
    selector: 'app-lookup-update',
    templateUrl: './provider.update.component.html'
})
export class ProviderUpdateComponent {

    isSaving = false;

    editForm = this.fb.group({
        summary: [null, [Validators.required]],
        description: [null, [Validators.required]]
    });

    constructor(private service: ProviderService, private fb: FormBuilder, private router: Router) {

    }

    previousState(): void {
        this.router.navigate(['provider']);
    }

    save(): void {
        this.isSaving = true;
        const lookUp = this.createFromForm();
        this.subscribeToSaveResponse(this.service.save(lookUp));
    }

    private createFromForm(): ProviderRequest {
        return {
            summary: this.editForm.get(['summary'])!.value,
            description: this.editForm.get([('description')])!.value
        }
    }

    protected subscribeToSaveResponse(result: Observable<ProviderResponse>): void {
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
    }


}

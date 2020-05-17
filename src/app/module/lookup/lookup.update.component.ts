import {Component} from '@angular/core';
import {LookupService} from "./lookup.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LookupRequest, LookupResponse} from "../../openapi";
import {Observable} from "rxjs";

@Component({
    selector: 'app-lookup-update',
    templateUrl: './lookup.update.component.html'
})
export class LookupUpdateComponent {

    isSaving = false;

    editForm = this.fb.group({
        summary: [null, [Validators.required]],
        description: [null, [Validators.required]]
    });

    constructor(private service: LookupService, private fb: FormBuilder, private router: Router) {

    }

    previousState(): void {
        this.router.navigate(['lookup']);
    }

    save(): void {
        this.isSaving = true;
        const lookUp = this.createFromForm();
        this.subscribeToSaveResponse(this.service.save(lookUp));
    }

    private createFromForm(): LookupRequest {
        return {
            summary: this.editForm.get(['summary'])!.value,
            description: this.editForm.get([('description')])!.value,
        }
    }

    protected subscribeToSaveResponse(result: Observable<LookupResponse>): void {
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

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // this is needed!
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {ExamplesModule} from './examples/examples.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {EntityModule} from "./entity.module";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
        EntityModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

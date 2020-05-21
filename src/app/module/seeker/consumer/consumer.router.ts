import {Routes} from "@angular/router";
import {ConsumerUpdateComponent} from "./consumer.update.component";
import {LoginComponent} from "./login.component";


export const consumerRouter: Routes = [
    {
        path: 'new',
        component: ConsumerUpdateComponent
    },
    {
        path: 'fbLogin',
        component: LoginComponent
    }


];

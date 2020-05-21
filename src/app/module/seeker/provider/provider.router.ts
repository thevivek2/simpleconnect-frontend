import {Routes} from "@angular/router";
import {ProviderComponent} from "./provider.component";
import {ProviderUpdateComponent} from "./provider.update.component";
import {ProviderDetailComponent} from "./provider.detail.component";


export const providerRoutes: Routes = [
  {
    path: '',
    component: ProviderComponent
  },

  {
    path: 'new',
    component: ProviderUpdateComponent
  },
  {
    path: ':id',
    component: ProviderDetailComponent

  }


];

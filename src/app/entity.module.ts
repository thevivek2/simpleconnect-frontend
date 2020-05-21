import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'provider', pathMatch: 'full'
      },
      {
        path: 'provider',
        loadChildren: () => import('./module/seeker/provider/provider.module').then(m => m.ProviderModule)
      },
      {
        path: 'consumer',
        loadChildren: () => import('./module/seeker/consumer/consumer.module').then(m => m.ConsumerModule)
      },
    ])
  ],
})
export class EntityModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../auth/helpers/auth.guards';
import { CoreCommonModule } from '../../../@core/common.module';
import { RouterModule } from '@angular/router';
import { Role } from '../../auth/models/role';
import { ContentHeaderModule } from '../../layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { CoreTouchspinModule } from '../../../@core/components/core-touchspin/core-touchspin.module';
import { CoreSidebarModule } from '../../../@core/components/core-sidebar/core-sidebar.module';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CardSnippetModule } from '../../../@core/components/card-snippet/card-snippet.module';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProspectosClientesListComponent } from './prospectos-clientes/prospectos-clientes-list/prospectos-clientes-list.component';
import { ChartsModule } from 'ng2-charts';
import {FlatpickrModule} from 'angularx-flatpickr';
import { ProspectosClientesEditComponent } from './prospectos-clientes/prospectos-clientes-edit/prospectos-clientes-edit.component';
import { NegociosListComponent } from './clientes/negocios/negocios-list/negocios-list.component';
import { NegociosEditComponent } from './clientes/negocios/negocios-edit/negocios-edit.component';
import { NegociosLoadComponent } from './clientes/negocios/negocios-load/negocios-load.component';
import { TransaccionesAddComponent } from './clientes/negocios/transacciones-add/transacciones-add.component';
import { TransaccionesListComponent } from './clientes/negocios/transacciones-list/transacciones-list.component';
import { TransaccionesLoadComponent } from './clientes/negocios/transacciones-load/transacciones-load.component';

const routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: ProspectosClientesListComponent,
    data: { roles: [Role.SuperMonedas] },
    canActivate: [AuthGuard]
    // data: { animation: 'auth' }
  },
  {
    path: 'negocios-list',
    component: NegociosListComponent,
    data: { roles: [Role.SuperMonedas] },
    canActivate: [AuthGuard]
    // data: { animation: 'auth' }
  },
];

@NgModule({
  declarations: [
    ProspectosClientesListComponent,
    ProspectosClientesEditComponent,
    NegociosListComponent,
    NegociosEditComponent,
    NegociosLoadComponent,
    TransaccionesAddComponent,
    TransaccionesListComponent,
    TransaccionesLoadComponent,
  ],
  imports: [
    CoreCommonModule,
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    SwiperModule,
    FormsModule,
    CoreTouchspinModule,
    CoreSidebarModule,
    NgbModule,
    Ng2FlatpickrModule,
    CardSnippetModule,
    ShareIconsModule,
    ShareButtonsModule,
    CommonModule,
    ChartsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
  ],
  exports: [
    ProspectosClientesListComponent,
    ProspectosClientesEditComponent,
    NegociosListComponent,
    NegociosEditComponent,
    NegociosLoadComponent,
    TransaccionesAddComponent,
    TransaccionesListComponent,
    TransaccionesLoadComponent,
  ]
})
export class MdmModule { }

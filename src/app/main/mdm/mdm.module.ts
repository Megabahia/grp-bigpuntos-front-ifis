import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "../../auth/helpers/auth.guards";
import { CoreCommonModule } from "../../../@core/common.module";
import { RouterModule } from "@angular/router";
import { Role } from "../../auth/models/role";
import { ContentHeaderModule } from "../../layout/components/content-header/content-header.module";
import { TranslateModule } from "@ngx-translate/core";
import { SwiperModule } from "ngx-swiper-wrapper";
import { CoreTouchspinModule } from "../../../@core/components/core-touchspin/core-touchspin.module";
import { CoreSidebarModule } from "../../../@core/components/core-sidebar/core-sidebar.module";
import { Ng2FlatpickrModule } from "ng2-flatpickr";
import { CardSnippetModule } from "../../../@core/components/card-snippet/card-snippet.module";
import { ShareIconsModule } from "ngx-sharebuttons/icons";
import { ShareButtonsModule } from "ngx-sharebuttons/buttons";
// import { ParamsComponent } from './params/params.component';
// import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { PersonasListComponent } from './clientes/personas/personas-list/personas-list.component';
// import { PersonasEditComponent } from './clientes/personas/personas-edit/personas-edit.component';
// import { TransaccionesListComponent } from './clientes/personas/transacciones-list/transacciones-list.component';
// import { TransaccionesAddComponent } from './clientes/personas/transacciones-add/transacciones-add.component';
// import { TransaccionesLoadComponent } from './clientes/personas/transacciones-load/transacciones-load.component';
// import { TransaccionesListComponent as TransaccionesListNegocios  } from './clientes/negocios/transacciones-list/transacciones-list.component';
// import { TransaccionesAddComponent  as TransaccionesAddNegocios } from './clientes/negocios/transacciones-add/transacciones-add.component';
// import { TransaccionesLoadComponent as TransaccionesLoadNegocios } from './clientes/negocios/transacciones-load/transacciones-load.component';
// import { PersonasLoadComponent } from './clientes/personas/personas-load/personas-load.component';
// import { NegociosListComponent } from './clientes/negocios/negocios-list/negocios-list.component';
// import { NegociosEditComponent } from './clientes/negocios/negocios-edit/negocios-edit.component';
// import { NegociosLoadComponent } from './clientes/negocios/negocios-load/negocios-load.component';
import { ProspectosClientesListComponent } from "./prospectos-clientes/prospectos-clientes-list/prospectos-clientes-list.component";
// import { ProspectosClientesAddCsvComponent } from './prospectos-clientes/prospectos-clientes-add-csv/prospectos-clientes-add-csv.component';
// import { ProspectosClientesAddXlsxComponent } from './prospectos-clientes/prospectos-clientes-add-xlsx/prospectos-clientes-add-xlsx.component';
import { ChartsModule } from "ng2-charts";
import { FlatpickrModule } from "angularx-flatpickr";
import { ProspectosClientesEditComponent } from "./prospectos-clientes/prospectos-clientes-edit/prospectos-clientes-edit.component";
import { PersonasListComponent } from "./clientes/personas/personas-list/personas-list.component";
// import { PersonasParientesComponent } from './clientes/personas/personas-parientes/personas-parientes.component';

const routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    component: ProspectosClientesListComponent,
    data: { roles: [Role.SuperMonedas] },
    canActivate: [AuthGuard],
    // data: { animation: 'auth' }
  },
  {
    path: "listClientes",
    component: PersonasListComponent,
    data: { roles: [Role.SuperMonedas] },
    canActivate: [AuthGuard],
    // data: { animation: 'auth' }
  },
];

@NgModule({
  declarations: [
    ProspectosClientesListComponent,
    ProspectosClientesEditComponent,
    PersonasListComponent,
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
    PersonasListComponent,
  ],
})
export class MdmModule {}

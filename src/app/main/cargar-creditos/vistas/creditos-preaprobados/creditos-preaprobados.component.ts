import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CoreMenuService } from '@core/components/core-menu/core-menu.service';
import { NgbModal, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'app/auth/models';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Subject } from 'rxjs';
import { CobroMonedas } from '../../models/cargar-creditos';
import { CargarCreditosPreAprobadosService } from './creditos-preaprobados.service';

@Component({
  selector: 'app-cargar-creditos-preaprobados',
  templateUrl: './creditos-preaprobados.component.html',
  styleUrls: ['./creditos-preaprobados.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'ecommerce-application' }
})
export class CargarCreditosPreAprobadosComponent implements OnInit {
  @ViewChild('mensajeModal') mensajeModal;
  @ViewChild(NgbPagination) paginator: NgbPagination;


  // public
  public page = 1;
  public page_size: any = 10;
  public maxSize;
  public collectionSize;
  public contentHeader: object;
  public cobroMonedas: CobroMonedas;
  public listaCobros;
  public submitted = false;
  public archivo = true;
  public nombreArchivo = "Seleccionar archivo";
  public mensaje = "";
  public wishlist;
  public nuevaImagen = new FormData();
  public cartList;
  public relatedProducts;
  public productos;
  public producto;
  private _unsubscribeAll: Subject<any>;

  public swiperResponsive: SwiperConfigInterface;

  public cantidadMonedas;
  public usuario;

  constructor(
    private _cargarCreditosPreAprobados: CargarCreditosPreAprobadosService,
    private _coreMenuService: CoreMenuService,
    private modalService: NgbModal,

  ) {
    this._unsubscribeAll = new Subject();
    this.usuario = this._coreMenuService.grpIfisUser;
  }

  ngOnInit(): void {

  }
  cargarCreditos(event) {

    let archivo = event.target.files[0];
    this.nuevaImagen = new FormData();
    this.nuevaImagen.append('documento', archivo, archivo.name);
    this.nombreArchivo = archivo.name;
    this.nuevaImagen.append('empresa_financiera', this.usuario.empresa._id);
    this.archivo = true;

  }
  cargar() {
    this.submitted = true;
    if (!this.nuevaImagen.get('documento')) {
      this.archivo = false;
      return;
    }
    this._cargarCreditosPreAprobados.cargarCreditos(
      this.nuevaImagen
    ).subscribe(info => {
      this.mensaje = "Archivo cargado con éxito";
      this.abrirModal(this.mensajeModal);
    });
  }

  abrirModal(modal) {
    this.modalService.open(modal)
  }
  cerrarModal() {
    this.modalService.dismissAll();
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Detalles, GenerarService, Oferta } from "./../generar.service";

@Component({
  selector: "app-edit-oferta",
  templateUrl: "./edit-oferta.component.html",
  styleUrls: ["./edit-oferta.component.scss"],
})
export class EditOfertaComponent implements OnInit {
  mensaje: string;
  constructor(private _formBuilder: FormBuilder) {}
  habilitarIdentificacion;
  telefonoOfertaBusq;
  habilitarTelefono;
  numRegex = /^-?\d*[.,]?\d{0,2}$/;
  listaPrecios = [];
  tipoClienteOferta;
  identificacionOfertaBusq;
  GenerarService;
  ofertaForm: FormGroup;
  oferta: Oferta;
  detallesForm;
  detalles: Detalles[] = [];
  detallesTransac;
  tipoCanalOpciones;
  iva;
  comprobarProductos: Boolean[];
  submittedTransaccionForm = false;
  get detallesArray(): FormArray {
    return this.ofertaForm.get("detalles") as FormArray;
  }

  get oForm() {
    return this.ofertaForm.controls;
  }
  ngOnInit(): void {}

  agregarItem(): void {
    this.detalles.push(this.GenerarService.inicializarDetalle());
    this.agregarPrecios();
    let detGrupo = this.crearDetalleGrupo();
    this.comprobarProductos.push(false);
    this.detallesArray.push(detGrupo);
  }
  agregarPrecios() {
    this.listaPrecios.push(this.GenerarService.inicializarPrecios());
  }
  verificarBusqueda() {
    if (!this.identificacionOfertaBusq && !this.telefonoOfertaBusq) {
      this.habilitarIdentificacion = false;
      this.habilitarTelefono = false;
    } else if (this.identificacionOfertaBusq) {
      this.habilitarIdentificacion = false;
      this.habilitarTelefono = true;
    } else if (this.telefonoOfertaBusq) {
      this.habilitarIdentificacion = true;
      this.habilitarTelefono = false;
    }
  }

  crearDetalleGrupo() {
    return this._formBuilder.group({
      codigo: ["", [Validators.required]],
      articulo: ["", [Validators.required]],
      valorUnitario: [0, [Validators.required, Validators.min(1)]],
      cantidad: [
        0,
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.min(1),
        ],
      ],
      informacionAdicional: ["", [Validators.required]],
      descuento: [0, [Validators.required, Validators.pattern(this.numRegex)]],
      valorDescuento: [0, [Validators.required]],
    });
  }
}

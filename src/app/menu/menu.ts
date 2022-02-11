import { CoreMenu } from '@core/types'
import { Role } from '../auth/models/role';

export const menu: CoreMenu[] = [
  {
    id: 'inicio',
    title: 'Inicio',
    // translate: 'MENU.HOME',
    // role: [Role.SuperMonedas],
    type: 'item',
    icon: 'home',
    url: 'ifis/inicio',

  },
  {
    id: 'apps',
    type: 'section',
    title: 'Administración',
    // role: [Role.SuperMonedas],
    // translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      {
        id: 'cargaCreditosPre',
        title: 'Cargar créditos Pre Aprobados',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'user',
        url: 'cargar-creditos/preaprobados',
      },
      {
        id: 'operacionCreditosPre',
        title: 'Operación créditos preaprobados',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'solicitudCreditosPre',
            title: 'Solicitud de créditos Pre Aprobados',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: 'operacion-creditos-preaprobados/solicitud',
          },
        ]
      },
      {
        id: 'operacionCreditosEmp',
        title: 'Operación créditos empleados',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'solicitudCreditosEmo',
            title: 'Solicitud de créditos empleados',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: 'operacion-creditos-empleados/solicitud',
          },
        ]
      },
      {
        id: 'operacionCreditosAut',
        title: 'Operación créditos autónomos',
        // translate: 'MENU.APPS.EMAIL',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'solicitudCreditosPre',
            title: 'Solicitud de créditos autónomos',
            // translate: 'MENU.HOME',
            // role: [Role.SuperMonedas],
            type: 'item',
            icon: 'circle',
            url: 'operacion-creditos-autonomos/solicitud',
          },
        ]
      },
      {
        id: 'solicitudesCreditos',
        title: 'Solicitudes créditos',
        // translate: 'MENU.HOME',
        // role: [Role.SuperMonedas],
        type: 'item',
        icon: 'user',
        url: 'solicitudes-creditos/solicitudes',
      },
    ]
  },

]

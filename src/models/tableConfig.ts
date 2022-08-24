
const columns = [
  {
    title: 'Nombre de campaña',
    field: 'name'
  },
  {
    title: 'Tipo',
    field: 'type'
  },
  {
    title: 'Fecha vigencia',
    field: 'dates'
  },
  {
    title: 'Canal',
    field: 'chanel'
  },
  {
    title: 'Prom. vinculadas',
    field: 'promotions'
  },
  {
    title: 'Bandera',
    field: 'flag'
  },
  {
    title: 'Estado',
    field: 'state'
  },
];

interface Map {
  [key: string]: string;
}

const CAMPAIGNS_STATES: Map = {
  "Creada": "one",
  "Activada": "two",
  "Pendiente Activación": "tree",
  "Desactivada": "four"
} 

export {columns,  CAMPAIGNS_STATES};
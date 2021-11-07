import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Generos} from './generos.model';
import {Productoras} from './productoras.model';

@model({settings: {strict: false}})
export class Peliculas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_lanzamiento: string;

  @property({
    type: 'string',
    required: true,
  })
  idioma_original: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  @belongsTo(() => Generos)
  generosId: string;

  @belongsTo(() => Productoras)
  productorasId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Peliculas>) {
    super(data);
  }
}

export interface PeliculasRelations {
  // describe navigational properties here
}

export type PeliculasWithRelations = Peliculas & PeliculasRelations;

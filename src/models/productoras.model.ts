import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Productoras extends Entity {
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
  nombre_estudio: string;

  @property({
    type: 'string',
    required: true,
  })
  pais_estudio: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Productoras>) {
    super(data);
  }
}

export interface ProductorasRelations {
  // describe navigational properties here
}

export type ProductorasWithRelations = Productoras & ProductorasRelations;

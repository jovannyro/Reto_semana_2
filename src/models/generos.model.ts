import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Generos extends Entity {
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
  genero_pelicula: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Generos>) {
    super(data);
  }
}

export interface GenerosRelations {
  // describe navigational properties here
}

export type GenerosWithRelations = Generos & GenerosRelations;

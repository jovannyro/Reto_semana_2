import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Peliculas,
  Productoras,
} from '../models';
import {PeliculasRepository} from '../repositories';

export class PeliculasProductorasController {
  constructor(
    @repository(PeliculasRepository)
    public peliculasRepository: PeliculasRepository,
  ) { }

  @get('/peliculas/{id}/productoras', {
    responses: {
      '200': {
        description: 'Productoras belonging to Peliculas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Productoras)},
          },
        },
      },
    },
  })
  async getProductoras(
    @param.path.string('id') id: typeof Peliculas.prototype.id,
  ): Promise<Productoras> {
    return this.peliculasRepository.productoras(id);
  }
}

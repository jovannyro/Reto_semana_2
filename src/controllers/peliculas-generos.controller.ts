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
  Generos,
} from '../models';
import {PeliculasRepository} from '../repositories';

export class PeliculasGenerosController {
  constructor(
    @repository(PeliculasRepository)
    public peliculasRepository: PeliculasRepository,
  ) { }

  @get('/peliculas/{id}/generos', {
    responses: {
      '200': {
        description: 'Generos belonging to Peliculas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Generos)},
          },
        },
      },
    },
  })
  async getGeneros(
    @param.path.string('id') id: typeof Peliculas.prototype.id,
  ): Promise<Generos> {
    return this.peliculasRepository.generos(id);
  }
}

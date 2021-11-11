import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Generos} from '../models';
import {GenerosRepository} from '../repositories';
import { NotificacionService } from '../services';

export class ControladorGenerosController {
  constructor(
    @repository(GenerosRepository)
    public generosRepository : GenerosRepository,
    
  ) {}

  @post('/generos')
  @response(200, {
    description: 'Generos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Generos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Generos, {
            title: 'NewGeneros',
            exclude: ['id'],
          }),
        },
      },
    })
    generos: Omit<Generos, 'id'>,
  ): Promise<Generos> {
    return this.generosRepository.create(generos);
  }

  @get('/generos/count')
  @response(200, {
    description: 'Generos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Generos) where?: Where<Generos>,
  ): Promise<Count> {
    return this.generosRepository.count(where);
  }

  @get('/generos')
  @response(200, {
    description: 'Array of Generos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Generos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Generos) filter?: Filter<Generos>,
  ): Promise<Generos[]> {
    return this.generosRepository.find(filter);
  }

  @patch('/generos')
  @response(200, {
    description: 'Generos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Generos, {partial: true}),
        },
      },
    })
    generos: Generos,
    @param.where(Generos) where?: Where<Generos>,
  ): Promise<Count> {
    return this.generosRepository.updateAll(generos, where);
  }

  @get('/generos/{id}')
  @response(200, {
    description: 'Generos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Generos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Generos, {exclude: 'where'}) filter?: FilterExcludingWhere<Generos>
  ): Promise<Generos> {
    return this.generosRepository.findById(id, filter);
  }

  @patch('/generos/{id}')
  @response(204, {
    description: 'Generos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Generos, {partial: true}),
        },
      },
    })
    generos: Generos,
  ): Promise<void> {
    await this.generosRepository.updateById(id, generos);
  }

  @put('/generos/{id}')
  @response(204, {
    description: 'Generos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() generos: Generos,
  ): Promise<void> {
    await this.generosRepository.replaceById(id, generos);
  }

  @del('/generos/{id}')
  @response(204, {
    description: 'Generos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.generosRepository.deleteById(id);
  }
}

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
import {Productoras} from '../models';
import {ProductorasRepository} from '../repositories';

export class ControladorProductorasController {
  constructor(
    @repository(ProductorasRepository)
    public productorasRepository : ProductorasRepository,
  ) {}

  @post('/productoras')
  @response(200, {
    description: 'Productoras model instance',
    content: {'application/json': {schema: getModelSchemaRef(Productoras)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productoras, {
            title: 'NewProductoras',
            exclude: ['id'],
          }),
        },
      },
    })
    productoras: Omit<Productoras, 'id'>,
  ): Promise<Productoras> {
    return this.productorasRepository.create(productoras);
  }

  @get('/productoras/count')
  @response(200, {
    description: 'Productoras model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Productoras) where?: Where<Productoras>,
  ): Promise<Count> {
    return this.productorasRepository.count(where);
  }

  @get('/productoras')
  @response(200, {
    description: 'Array of Productoras model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Productoras, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Productoras) filter?: Filter<Productoras>,
  ): Promise<Productoras[]> {
    return this.productorasRepository.find(filter);
  }

  @patch('/productoras')
  @response(200, {
    description: 'Productoras PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productoras, {partial: true}),
        },
      },
    })
    productoras: Productoras,
    @param.where(Productoras) where?: Where<Productoras>,
  ): Promise<Count> {
    return this.productorasRepository.updateAll(productoras, where);
  }

  @get('/productoras/{id}')
  @response(200, {
    description: 'Productoras model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Productoras, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Productoras, {exclude: 'where'}) filter?: FilterExcludingWhere<Productoras>
  ): Promise<Productoras> {
    return this.productorasRepository.findById(id, filter);
  }

  @patch('/productoras/{id}')
  @response(204, {
    description: 'Productoras PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Productoras, {partial: true}),
        },
      },
    })
    productoras: Productoras,
  ): Promise<void> {
    await this.productorasRepository.updateById(id, productoras);
  }

  @put('/productoras/{id}')
  @response(204, {
    description: 'Productoras PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() productoras: Productoras,
  ): Promise<void> {
    await this.productorasRepository.replaceById(id, productoras);
  }

  @del('/productoras/{id}')
  @response(204, {
    description: 'Productoras DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.productorasRepository.deleteById(id);
  }
}

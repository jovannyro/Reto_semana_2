import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongopeliculasDataSource} from '../datasources';
import {Productoras, ProductorasRelations} from '../models';

export class ProductorasRepository extends DefaultCrudRepository<
  Productoras,
  typeof Productoras.prototype.id,
  ProductorasRelations
> {
  constructor(
    @inject('datasources.mongopeliculas') dataSource: MongopeliculasDataSource,
  ) {
    super(Productoras, dataSource);
  }
}

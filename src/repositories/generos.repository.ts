import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongopeliculasDataSource} from '../datasources';
import {Generos, GenerosRelations} from '../models';

export class GenerosRepository extends DefaultCrudRepository<
  Generos,
  typeof Generos.prototype.id,
  GenerosRelations
> {
  constructor(
    @inject('datasources.mongopeliculas') dataSource: MongopeliculasDataSource,
  ) {
    super(Generos, dataSource);
  }
}

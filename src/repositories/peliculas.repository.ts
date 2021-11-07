import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongopeliculasDataSource} from '../datasources';
import {Peliculas, PeliculasRelations, Generos, Productoras} from '../models';
import {GenerosRepository} from './generos.repository';
import {ProductorasRepository} from './productoras.repository';

export class PeliculasRepository extends DefaultCrudRepository<
  Peliculas,
  typeof Peliculas.prototype.id,
  PeliculasRelations
> {

  public readonly generos: BelongsToAccessor<Generos, typeof Peliculas.prototype.id>;

  public readonly productoras: BelongsToAccessor<Productoras, typeof Peliculas.prototype.id>;

  constructor(
    @inject('datasources.mongopeliculas') dataSource: MongopeliculasDataSource, @repository.getter('GenerosRepository') protected generosRepositoryGetter: Getter<GenerosRepository>, @repository.getter('ProductorasRepository') protected productorasRepositoryGetter: Getter<ProductorasRepository>,
  ) {
    super(Peliculas, dataSource);
    this.productoras = this.createBelongsToAccessorFor('productoras', productorasRepositoryGetter,);
    this.registerInclusionResolver('productoras', this.productoras.inclusionResolver);
    this.generos = this.createBelongsToAccessorFor('generos', generosRepositoryGetter,);
    this.registerInclusionResolver('generos', this.generos.inclusionResolver);
  }
}

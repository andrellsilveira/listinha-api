import { EntityRepository, Repository } from 'typeorm';

import Template from '../models/Template';

/**
 * O Decorator "@EntityRepository" indica qual é o model ao qual esse repositório faz
 * referência, conforme o parâmetro especificado para o mesmo
 */
@EntityRepository(Template)
/**
 * Ao herdar a classe "Repository" temos a disposição vários métodos para manipulação dos
 * registros do model especificado como parâmetro
 */
class TemplatesRepository extends Repository<Template> {
    /**
     * TODO: Métodos customizados para tratamento dos dados
     */
}

export default TemplatesRepository;

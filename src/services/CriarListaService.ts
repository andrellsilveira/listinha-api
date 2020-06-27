import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Lista from '../models/Lista';

class CriarListaService {
    public async execute(nome: string): Promise<Lista> {
        const listasRepository = getRepository(Lista);

        /**
         * Verifica se o nome está nulo, em caso positivo dispara um erro
         */
        if (nome == null) {
            throw new AppError('O nome da lista deve ser preenchido.');
        }

        /**
         * O método "create" apenas cria uma instância do registro e não o salva no banco de
         * dados. Para salvar é necessário utilizar o método "save"
         */
        const lista = listasRepository.create({
            nome,
        });

        /**
         * Método utilizado para gravar o registro no banco de dados
         */
        await listasRepository.save(lista);

        return lista;
    }
}

export default CriarListaService;

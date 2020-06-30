import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Item from '../models/Item';

interface Request {
    nome: string;
    qtde: number;
    id_lista: string;
}

class CriarItemService {
    public async execute({ nome, qtde, id_lista }: Request): Promise<Item> {
        const itensRepository = getRepository(Item);

        /**
         * Verifica se o nome está nulo, em caso positivo dispara um erro
         */
        if (nome == null) {
            throw new AppError('O nome do item deve ser preenchido.');
        }

        if (qtde < 0) {
            throw new AppError(
                'A quantidade do item deve ser maior ou igual a zero.',
            );
        }

        /**
         * O método "create" apenas cria uma instância do registro e não o salva no banco de
         * dados. Para salvar é necessário utilizar o método "save"
         */
        const item = itensRepository.create({
            nome,
            qtde,
            id_lista,
        });

        /**
         * Método utilizado para gravar o registro no banco de dados
         */
        await itensRepository.save(item);

        return item;
    }
}

export default CriarItemService;

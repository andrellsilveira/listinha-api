import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Template from '../models/Template';
import TemplateRepository from '../repositories/TemplatesRepository';

interface Request {
    nome: string;
    data: Date;
}

class CreateTemplateService {
    public async execute({ nome, data }: Request): Promise<Template> {
        /**
         * Recupera o repositório customizado e iniciliza-o na variável
         */
        const templatesRepository = getCustomRepository(TemplateRepository);

        /**
         * Verifica se o nome está nulo, em caso positivo dispara um erro
         */
        if (nome == null) {
            throw new AppError('O nome deve ser preenchido.');
        }

        /**
         * O método "create" apenas cria uma instância do registro e não o salva no banco de
         * dados. Para salvar é necessário utilizar o método "save"
         */
        const template = templatesRepository.create({
            nome,
            data,
        });

        /**
         * Método utilizado para gravar o registro no banco de dados
         */
        await templatesRepository.save(template);

        return template;
    }
}

export default CreateTemplateService;

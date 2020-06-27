import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

/**
 * O Decorator "@Entity" é utilizado para indicar a qual tabela esse model faz referência.
 * */
@Entity('listas')
class Lista {
    /**
     * O Decorator "@PrimaryGeneratedColumn" indica que o atributo é uma chave da tabela e deve
     * ser gerado automaticamente conforme o parâmetro especificado
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
     * O Decorator "@Column" indica que o atributo é uma coluna da tabela
     * Se não for passado nenhum parâmetro para o Decorator, assumirá que
     * a coluna é do tipo varchar
     */
    @Column()
    nome: string;

    @Column('boolean')
    concluida: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Lista;

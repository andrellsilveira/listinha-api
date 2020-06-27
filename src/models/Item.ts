import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Lista from './Lista';

/**
 * O Decorator "@Entity" é utilizado para indicar a qual tabela esse model faz referência.
 * */
@Entity('itens')
class Item {
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

    @Column('integer')
    qtde: number;

    @Column('boolean')
    verificado: boolean;

    @Column()
    id_lista: string;

    /**
     * O Decorator "@ManyToOne" indica o tipo de relacionamento entre as tabelas (models)
     */
    @ManyToOne(() => Lista)
    /**
     * O Decorator "@JoinColumn" indica com qual atributo a instância da classe externa
     * vai se relacionar
     */
    @JoinColumn({ name: 'id_lista' })
    /**
     * Ess propriedade é necessária para termos o relacionamento entre o model de
     * Template e o model Usuario
     */
    lista: Lista;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Item;

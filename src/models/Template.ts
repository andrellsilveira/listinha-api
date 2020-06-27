import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

/**
 * O Decorator "@Entity" é utilizado para indicar a qual tabela esse model faz referência.
 * */
@Entity('templates')
class Template {
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

    // @Column()
    // id_usuario: string;

    /**
     * O Decorator "@ManyToOne" indica o tipo de relacionamento entre as tabelas (models)
     */
    // @ManyToOne(() => Usuario)
    /**
     * O Decorator "@JoinColumn" indica com qual atributo a instância da classe externa
     * vai se relacionar
     */
    // @JoinColumn({ name: 'id_usuario' })
    /**
     * Ess propriedade é necessária para termos o relacionamento entre o model de
     * Template e o model Usuario
     */
    // usuario: Usuario;

    @Column('time with time zone')
    data: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Template;

import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export default class CreateTableItem1593537061772
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'itens',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'qtde',
                        type: 'integer',
                        isNullable: false,
                        default: 0,
                    },
                    {
                        name: 'verificado',
                        type: 'boolean',
                        isNullable: false,
                        default: false,
                    },
                    {
                        name: 'id_lista',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'itens',
            new TableForeignKey({
                name: 'ItemIdListaFK',
                columnNames: ['id_lista'],
                referencedColumnNames: ['id'],
                referencedTableName: 'listas',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('itens', 'ItemIdListaFK');

        await queryRunner.dropTable('itens');
    }
}

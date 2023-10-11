import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionTransaction1697055973020 implements MigrationInterface {
    name = 'AddDescriptionTransaction1697055973020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" ADD "description" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "description"`);
    }

}

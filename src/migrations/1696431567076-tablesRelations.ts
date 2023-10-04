import { MigrationInterface, QueryRunner } from "typeorm";

export class TablesRelations1696431567076 implements MigrationInterface {
    name = 'TablesRelations1696431567076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "payables" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "payables" ADD "transactionId" integer`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_605baeb040ff0fae995404cea37" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payables" ADD CONSTRAINT "FK_da0f9ce92e77833f113e31cbab3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payables" ADD CONSTRAINT "FK_8c39946fbf382dd8b623da66c16" FOREIGN KEY ("transactionId") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payables" DROP CONSTRAINT "FK_8c39946fbf382dd8b623da66c16"`);
        await queryRunner.query(`ALTER TABLE "payables" DROP CONSTRAINT "FK_da0f9ce92e77833f113e31cbab3"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_605baeb040ff0fae995404cea37"`);
        await queryRunner.query(`ALTER TABLE "payables" DROP COLUMN "transactionId"`);
        await queryRunner.query(`ALTER TABLE "payables" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP COLUMN "userId"`);
    }

}

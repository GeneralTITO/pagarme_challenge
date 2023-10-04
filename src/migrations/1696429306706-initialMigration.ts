import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1696429306706 implements MigrationInterface {
    name = 'InitialMigration1696429306706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."payables_status_enum" AS ENUM('paid', 'waiting_funds')`);
        await queryRunner.query(`CREATE TABLE "payables" ("id" SERIAL NOT NULL, "value" numeric(11,2) NOT NULL, "status" "public"."payables_status_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "payment_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_33adb2ad800095b1f556f01b2c3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "email" character varying(250) NOT NULL, "password" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."transaction_payment_method_enum" AS ENUM('debit_card', 'credit_card')`);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "value" numeric(11,2) NOT NULL, "payment_method" "public"."transaction_payment_method_enum" NOT NULL, "card_number" character varying(16) NOT NULL, "cardholder_name" character varying(250) NOT NULL, "card_expiration_date" character varying(6) NOT NULL, "cvv" character varying(3) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TYPE "public"."transaction_payment_method_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "payables"`);
        await queryRunner.query(`DROP TYPE "public"."payables_status_enum"`);
    }

}

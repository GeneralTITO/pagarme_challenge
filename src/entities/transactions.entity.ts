import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("transaction")
export class Transaction {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ precision: 11, scale: 2 })
  value: number;

  @Column({
    type: "enum",
    enum: ["debit_card", "credit_card"],
  })
  payment_method: string;

  @Column({ length: 16 })
  card_number: number;

  @Column({ length: 250 })
  cardholder_name: string;

  @Column({ type: "datetime" })
  card_expiration_date: string;

  @Column({ precision: 3 })
  cvv: number;
}

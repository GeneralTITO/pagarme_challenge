import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("transaction")
export class Transaction {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "decimal", precision: 11, scale: 2 })
  value: number;

  @Column({
    type: "enum",
    enum: ["debit_card", "credit_card"],
  })
  payment_method: string;

  @Column({ length: 16 })
  card_number: string;

  @Column({ length: 250 })
  cardholder_name: string;

  @Column({ length: 6 })
  card_expiration_date: string;

  @Column({ length: 3 })
  cvv: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Transactione } from "./transactions.entity";

@Entity("payables")
export class Payable {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "decimal", precision: 11, scale: 2 })
  value: number;

  @Column({
    type: "enum",
    enum: ["paid", "waiting_funds"],
  })
  status: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  payment_date: Date;

  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @ManyToOne(() => Transactione, (transaction) => transaction.payables)
  transaction: Transactione;
}

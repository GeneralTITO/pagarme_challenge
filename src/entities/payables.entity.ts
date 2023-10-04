import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("transaction")
export class Payable {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ precision: 11, scale: 2 })
  value: number;

  @Column({
    type: "enum",
    enum: ["paid", "waiting_funds"],
  })
  status: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp" })
  payment_date: string;
}

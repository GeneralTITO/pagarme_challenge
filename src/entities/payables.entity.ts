import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

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

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @Column({ type: "date" })
  payment_date: string;
}

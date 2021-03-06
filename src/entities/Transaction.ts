/**
 * For the transaction table
 */

//Dependencies
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";

export enum TransactionType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}

@Entity('transactions')
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: "enum",
        enum: TransactionType
    })
    type: string

    @Column({
        type:"numeric"
    })
    amount: number

    @ManyToOne(
        () => Client,
        client => client.transactions
    )

    @JoinColumn({
        name:"client_id"
    })
    client:Client
}
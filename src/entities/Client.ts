/**
 * Client table
 */

//Dependencies
import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';
import { Banker } from './Banker';
import { Transaction, TransactionType } from './Transaction';
import { Person } from './utils/Person';

@Entity('client')
export class Client extends Person {
	@Column({
		unique: true,
		length: 10,
	})
	card_number: string;

	@Column({
		type: 'numeric',
	})
	balance: number;

	@Column({
		nullable:true
	}) is_active: boolean;

	@Column({
		type: 'simple-json',
		nullable: true,
	})
	additional_info: {
		age: number,
		hairColor: string,
	};

	@Column({
		type: 'simple-array',
		default: [],
	})
	family_members: string[];

	@OneToMany(() => Transaction, (transaction) => transaction.client)
	transactions: Transaction[];

	@ManyToMany(() => Banker)
	bankers: Banker[];
}

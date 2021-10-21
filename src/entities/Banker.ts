/**
 * Banker table
 */

//Dependencies
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Client } from './Client';
import { Person } from './utils/Person';

@Entity()
export class Banker extends Person {
	@Column({
		unique: true,
		length: 10,
	})
	card_number: string;

	@Column({
		unique: true,
		nullable: true,
	})
	employee_number: string;

	@ManyToMany(() => Client)
	@JoinTable({
		name: 'bankers_client',
		joinColumn: {
			name: 'banker',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'client',
			referencedColumnName: 'id',
		},
	})
	clients: Client[];
}

/**
 * Banker table
 */

//Dependencies
import { Entity, BaseEntity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
    id: string;
    
	@Column() first_name: string;

	@Column() last_name: string;

	@Column({
		unique: true,
		nullable: false,
	})
	email: string;

	@CreateDateColumn() created_at: Date;

	@UpdateDateColumn() updated_at: Date;
}

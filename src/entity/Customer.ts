import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Appointment } from "./Appointment";

@ObjectType()
@Entity()
export class Customer extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    name!: String;

    @Field()
    @Column()
    idCard!: String;

    @Field()
    @Column()
    phone!: String;

    @Field()
    @Column()
    city!: String;

    @OneToMany(() => Appointment, appointmen => appointmen.customer)
    appointments!: Appointment[];

    @Field(() => String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!: String
}
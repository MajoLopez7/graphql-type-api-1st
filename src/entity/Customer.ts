import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

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

    @Field(() => String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!: String
}
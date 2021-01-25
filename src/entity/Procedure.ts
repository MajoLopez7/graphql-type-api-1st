//procedimiento medico
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Procedure extends BaseEntity{

    //id=1
    //name=limpieza de sarro
    //description=limpieza de sarro grado 3
    //createDate=04/01/2021
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    name!: String;

    @Field()
    @Column()
    description!: String;

    @Field(() => String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!: String
}
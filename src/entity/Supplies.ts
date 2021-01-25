//insumos medicos
//procedimiento medico
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Supplies extends BaseEntity{

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
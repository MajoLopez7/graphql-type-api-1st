//es enfermedades
//insumos medicos
//procedimiento medico
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Diseases extends BaseEntity{

    //id=1
    //name=conducto
    //description=limpieza de sarro grado 3
    //type=caries/ortodoncia/endodoncia/protesis/etc
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
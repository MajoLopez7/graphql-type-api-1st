import { Customer } from './Customer';
import { Doctor } from './Doctor';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity,ManyToMany,JoinTable, OneToOne, JoinColumn } from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { Supplies } from './Supplies';
import { Procedure } from './Procedure';
import { Diseases } from './Diseases';

@ObjectType()
@Entity()
export class Appointment extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @OneToOne(() => Customer)
    @JoinColumn()
    customer!: Customer;

    @OneToOne(() => Doctor)
    @JoinColumn()
    doctor!: Doctor;

    @OneToOne(() => Doctor)
    @JoinColumn()
    assistantDoctor!: Doctor;

    @Field(() => String)
    @Column()
    phone!: String;

    //fecha de la consulta 
    // (Se actualizan= Insumos, enfermedad, procedimiento y posible DR asistente)
    @Field(() => String)
    @CreateDateColumn({type:'timestamp'})
    appointmentDate!: String

   //fecha de creaacion de la consulta 
    @Field(() => String)
    @CreateDateColumn({type:'timestamp'})
    createdAt!: String

    //enfermedad
  //  @Field(() => [Diseases])
  //  @Column()
    @ManyToMany(() => Diseases)
    @JoinTable()
    diseases!: Diseases[];

    //nombre del procedimiento que se realizo
    //@Field(() => [Procedure])
  //  @Column()
    @ManyToMany(() => Procedure)
    @JoinTable()
    procedure!: Procedure[];

    //lista de insumos utilizados en la consulta
   // @Field(() => [Supplies])
    //@Column()
    @ManyToMany(() => Supplies)
    @JoinTable()
    supplies!: Supplies[];
    
}
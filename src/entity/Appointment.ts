import { Customer } from './Customer';
import { Doctor } from './Doctor';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity,ManyToMany,JoinTable, ManyToOne } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Supplies } from './Supplies';
import { Procedure } from './Procedure';
import { Diseases } from './Diseases';

@ObjectType()
@Entity()
export class Appointment extends BaseEntity{
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  customerId!: number;

  @Field()
  @ManyToOne(() => Customer, customer => customer.appointments)
  customer!: Customer;

  @Column()
  doctorId!: number;

  @Field()
  @ManyToOne(() => Doctor, doctor => doctor.appointments)
  doctor!: Doctor;

  @Column()
  assistantDoctorId!: number;

  @Field()
  @ManyToOne(() => Doctor, doctor => doctor.appointments)
  assistantDoctor!: Doctor;

  @Field(() => String)
  @Column()
  phone!: String;

  //fecha de la consulta 
  // (Se actualizan= Insumos, enfermedad, procedimiento y posible DR asistente)
  @Field(() => String)
  @CreateDateColumn({type:'timestamp'})
  appointmentDate!: string

 //fecha de creaacion de la consulta 
  @Field(() => String)
  @CreateDateColumn({type:'timestamp'})
  createdAt!: string

  //enfermedad
//  @Field(() => [Diseases])
//  @Column()

  @Field(() => [Diseases])
  @ManyToMany(() => Diseases)
  @JoinTable()
  diseases!: Diseases[];

  //nombre del procedimiento que se realizo
  //@Field(() => [Procedure])
//  @Column()
  @Field(() => [Procedure])
  @ManyToMany(() => Procedure)
  @JoinTable()
  procedure!: Procedure[];

  //lista de insumos utilizados en la consulta
 // @Field(() => [Supplies])
  //@Column()
  @Field(() => [Supplies])
  @ManyToMany(() => Supplies)
  @JoinTable()
  supplies!: Supplies[];
    
}
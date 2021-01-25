import { Doctor } from './../entity/Doctor';
import { Customer } from './../entity/Customer';
import { Appointment } from './../entity/Appointment';
import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from 'type-graphql';
import { Supplies } from '../entity/Supplies';
import { Procedure } from '../entity/Procedure';
import { Diseases } from '../entity/Diseases';

@InputType()
class AppointmentInput{

    @Field(() => Customer)
    customer!: Customer

    @Field(() => Doctor)
    doctor!: Doctor

    @Field(() => Doctor)
    assistantDoctor!: Doctor

    @Field()
    phone!: string

    @Field()
    appointmentDate!: String

    @Field( () => [Diseases])
    diseases!: Diseases[];

    @Field(() => [Procedure])
   procedure!: Procedure[];

    @Field(() => [Supplies])
    supplies!: Supplies[];

}
@InputType()
class AppointmentInputUpdate{

    @Field(() => String, {nullable:true})
    phone?: string
}

@Resolver()
export class AppointmentResolver{

    @Mutation(() => Appointment)
    async createAppointment(
      @Arg("variables", () => AppointmentInput) variables: AppointmentInput
      ){
        const newAppointment = Appointment.create(variables)
        return await newAppointment.save()
      }
  
      @Mutation(() => Boolean)
      async deleteAppointment(@Arg("id", () => Int) id : number){
          await Appointment.delete(id);
          console.log(id)
          return true;
      }
  
      @Mutation(() => Boolean)
          async updateAppointment(
              @Arg("id", ()=> Int) id:number,
              @Arg("fields", ()=> AppointmentInputUpdate) fields : AppointmentInputUpdate,
          ){
              await Appointment.update({id},fields);
              console.log(id,fields)
              return true 
          }
      
      @Query(() => [Appointment])
      async AppointmentList(){
          return await Appointment.find()
      }
}
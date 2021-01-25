import { Appointment } from './../entity/Appointment';
import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from 'type-graphql';
import { Supplies } from '../entity/Supplies';
import { Procedure } from '../entity/Procedure';
import { Diseases } from '../entity/Diseases';

@InputType()
class AppointmentInput{
    @Field()
    customerId!: number;

    @Field()
    doctorId!: number;

    @Field()
    assistantDoctorId!: number;

    @Field()
    phone!: string;

    @Field(() => [Int])
    diseasesIds!: number[];

    @Field(() => [Int])
    procedureIds!: number[];

    @Field(() => [Int])
    suppliesIds!: number[];
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
        const diseases = await Diseases.findByIds(variables.diseasesIds);
        const procedure = await Procedure.findByIds(variables.procedureIds);
        const supplies = await Supplies.findByIds(variables.suppliesIds);
        const newAppointment = Appointment.create({
            ...variables,
            diseases,
            procedure,
            supplies
        });
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
        return await Appointment.find({relations: ['customer', 'doctor', 'assistantDoctor', 'diseases', 'procedure', 'supplies']});
      }
}
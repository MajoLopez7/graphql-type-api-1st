import { Doctor } from './../entity/Doctor';
import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from 'type-graphql';

@InputType()
class DoctorInput{
    @Field()
    name!: string

    @Field()
    idCard!: String;
}
@InputType()
class DoctorInputUpdate{
    @Field()
    name!: string
}

@Resolver()
export class DoctorResolver{
    @Mutation(() => Doctor)
    async createDoctor(
      @Arg("variables", () => DoctorInput) variables: DoctorInput
      ){
        const newDoctor = Doctor.create(variables)
        return await newDoctor.save()
      }
  
      @Mutation(() => Boolean)
      async deleteDoctor(@Arg("id", () => Int) id : number){
          await Doctor.delete(id);
          console.log(id)
          return true;
      }
  
      @Mutation(() => Boolean)
          async updateDoctor(
              @Arg("id", ()=> Int) id:number,
              @Arg("fields", ()=> DoctorInputUpdate) fields : DoctorInputUpdate,
          ){
              await Doctor.update({id},fields);
              console.log(id,fields)
              return true 
          }
      
      @Query(() => [Doctor])
      async DoctorList(){
          return await Doctor.find()
      }
}
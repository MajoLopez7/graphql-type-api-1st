import { Procedure } from './../entity/Procedure';
import {Resolver, Query, Mutation, Arg, Field, InputType, Int} from 'type-graphql'



@InputType()
class ProcedureInput{
    @Field()
    name!: string
    @Field()
    description!: string
}

@InputType()
class ProcedureInputUpdate{
    @Field(() => String, {nullable:true})
    name?: string

    @Field(() => String, {nullable:true})
    description?: string
}

@Resolver()
export class ProcedureResolver{

    @Mutation(() => Procedure)
    async createProcedure(
      @Arg("variables", () => ProcedureInput) variables: ProcedureInput
      ){
        const newProcedure = Procedure.create(variables)
        return await newProcedure.save()
      }
  
      @Mutation(() => Boolean)
      async deleteProcedure(@Arg("id", () => Int) id : number){
          await Procedure.delete(id);
          console.log(id)
          return true;
      }
  
      @Mutation(() => Boolean)
          async updateProcedure(
              @Arg("id", ()=> Int) id:number,
              @Arg("fields", ()=> ProcedureInputUpdate) fields : ProcedureInputUpdate,
          ){
              await Procedure.update({id},fields);
              console.log(id,fields)
              return true 
          }
      
      @Query(() => [Procedure])
      async ProcedureList(){
          return await Procedure.find()
      }





}
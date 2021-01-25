import {Resolver, Query, Mutation, Arg, Field, InputType, Int} from 'type-graphql'
import { Diseases } from '../entity/Diseases';


@InputType()
class DiseasesInput{
    @Field()
    name!: string
    @Field()
    description!: string
}

@InputType()
class DiseasesInputUpdate{
    @Field(() => String, {nullable:true})
    name?: string

    @Field(() => String, {nullable:true})
    quantity?: string
}


@Resolver()
export class DiseasesResolver{

    @Mutation(() => Diseases)
    async createDiseases(
      @Arg("variables", () => DiseasesInput) variables: DiseasesInput
      ){
        const newDiseases = Diseases.create(variables)
        return await newDiseases.save()
      }

      @Mutation(() => Boolean)
      async deleteDiseases(@Arg("id", () => Int) id : number){
          await Diseases.delete(id);
          console.log(id)
          return true;
      }

      @Mutation(() => Boolean)
      async updateDiseases(
          @Arg("id", ()=> Int) id:number,
          @Arg("fields", ()=> DiseasesInputUpdate) fields : DiseasesInputUpdate,
      ){
          await Diseases.update({id},fields);
          console.log(id,fields)
          return true 
      }

      @Query(() => [Diseases])
      async DiseasesList(){
          return await Diseases.find()
      }
}
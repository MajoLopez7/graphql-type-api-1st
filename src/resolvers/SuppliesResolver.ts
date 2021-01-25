import { Resolver, Query, Mutation, Arg, Field, InputType, Int } from 'type-graphql';
import { Supplies } from './../entity/Supplies';

@InputType()
class SuppliesInput{
    @Field()
    name!: string
    @Field()
    description!: string
}

@InputType()
class SuppliesInputUpdate{
    @Field()
    name!: string
}


@Resolver()
export class SuppliesResolver{
    @Mutation(() => Supplies)
  async createSupplies(
    @Arg("variables", () => SuppliesInput) variables: SuppliesInput
    ){
      const newSupplies = Supplies.create(variables)
      return await newSupplies.save()
    }

    @Mutation(() => Boolean)
    async deleteSupplies(@Arg("id", () => Int) id : number){
        await Supplies.delete(id);
        console.log(id)
        return true;
    }

    @Mutation(() => Boolean)
        async updateSupplies(
            @Arg("id", ()=> Int) id:number,
            @Arg("fields", ()=> SuppliesInputUpdate) fields : SuppliesInputUpdate,
        ){
            await Supplies.update({id},fields);
            console.log(id,fields)
            return true 
        }
    
    @Query(() => [Supplies])
    async SuppliesList(){
        return await Supplies.find()
    }
}
import { Customer } from './../entity/Customer';
import {Resolver, Query, Mutation, Arg, Field, InputType, Int} from 'type-graphql'

// tiene que ser igual a mi entity los campos que le defino al menos
@InputType()
class CustomerInput{
    @Field()
    name!: String

    @Field()
    idCard!: String;

    @Field()
    phone!: String;

    @Field()
    city!: String;
}

// tiene que ser igual a mi entity
@InputType()
class CustomerInputUpdate{
    @Field(() => String, {nullable:true})
    name?: string

    @Field(() => String, {nullable:true})
    idCard?: string
    
    @Field(() => String, {nullable:true})
    phone?: string

    @Field(() => String, {nullable:true})
    city?: string
}



@Resolver()
export class CustomerResolver{
    @Mutation(() => Customer)
  async createCustomer(
    @Arg("variables", () => CustomerInput) variables: CustomerInput
    ){
      const newCustomer = Customer.create(variables)
      return await newCustomer.save()
    }

    @Mutation(() => Boolean)
    async deleteCustomer(@Arg("id", () => Int) id : number){
        await Customer.delete(id);
        console.log(id)
        return true;
    }

    @Mutation(() => Boolean)
        async updateCustomer(
            @Arg("id", ()=> Int) id:number,
            @Arg("fields", ()=> CustomerInputUpdate) fields : CustomerInputUpdate,
        ){
            await Customer.update({id},fields);
            console.log(id,fields)
            return true 
        }
    
    @Query(() => [Customer])
    async CustomerList(){
        return await Customer.find()
    }
}
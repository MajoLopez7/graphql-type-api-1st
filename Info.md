--Remember that you have to specify the values you want to return the method --

mutation{
  createCustomer(variables: {
      name:"Dahiana Lopez",
  phone:"098123123",
  idCard:"1231234",
  city:"Aregua"
  }){
    name
  }

}

mutation{
  deleteCustomer(id:1)
}

mutation{
  updateCustomer(id:1,fields:{
    name:"Dahia"
  })
}

query{
  CustomerList{
    name,
    phone,
    city
  }
}

Validate
////////////
-- Customer
-- Doctor
-- Procedure
-- Supplies
-- Diseasess
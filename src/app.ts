import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PingResolver } from "./resolvers/ping";
import { AppointmentResolver } from "./resolvers/AppointmentResolver";
import { CustomerResolver } from "./resolvers/CustomerResolver";
import { DoctorResolver } from "./resolvers/DoctorResolver";

import { DiseasesResolver } from "./resolvers/DiseasesResolver";
import { ProcedureResolver } from "./resolvers/ProcedureResolver";
import { SuppliesResolver } from "./resolvers/SuppliesResolver";



export async function startServer(){
    const app = express()
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver,AppointmentResolver,CustomerResolver,
                DoctorResolver,DiseasesResolver,ProcedureResolver,SuppliesResolver],
            validate: false
        }),
        context : ({req,res}) => ({req,res})
    })
    server.applyMiddleware({ app, path: '/graphql' })
 return app;
}

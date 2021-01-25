import { createConnection } from "typeorm";
import  path  from "path";
export async function connect(){
    await createConnection({
        type:'postgres',
        host:'localhost',
        port:5432,
        username:'postgres',
        password:'expmjl',
        database:'smdl',
        entities:[
            path.join(__dirname, '../entity/**/**.ts')
         ],
        synchronize: true
    });
    console.log('Database is connected dude!')
}
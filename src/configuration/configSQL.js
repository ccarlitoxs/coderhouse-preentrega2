import  dotenv from "dotenv";
dotenv.config();


export const config = {
    client: 'mysql',
    connection: {
        host: process.env.HOSTSQL,
        user: process.env.DBSQLUSER,
        password: process.env.DBSQLPASSWORD,
        database: process.env.DBSQL,
    },
    pool: {min:0, max:10}
}
console.log(config)
import knex from 'knex'

export const connection = knex ({
    client: "mysql",
    // connection: {
    //     host: process.env.DB_HOST,
    //     port: 3306,
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASS,
    //     database: process.env.DB_NAME
    // }

    connection: {
    host: '35.226.146.116', //process.env.DB_HOST,
    port: 3306,
    user: '4211452-robson-ribeiro',//process.env.DB_USER,
    password: 'wSq6EUATAyFPDT23MFF19YUWCigpVt3ulhToIm+u', //process.env.DB_PASSWORD
    database: 'guimaraes-4211452-robson-ribeiro' //process.env.DB_NAME
}

})




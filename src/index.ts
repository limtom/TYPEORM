/**
 * Create a connection to the database 
 */

//Dependencies
import express  from 'express';
import { createConnection } from 'typeorm';
import { Banker } from './entities/Banker';
import { Client } from './entities/Client';
import { Transaction } from './entities/Transaction';
import { createBankerRouter } from './routes/create_banker';
import { createClientRouter } from './routes/create_client';

const app = express()

const main = async () => {
	try {
		await createConnection({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'horlar031191',
			database: 'typeorm',
			entities: [
				Client,
				Banker,
				Transaction,
			],
			synchronize: true,
		});
        console.log('Database connection successfull');

        //Middleware 
        app.use(express.json())
        app.use(createClientRouter)
        app.use(createBankerRouter)

        //Start the Server
        app.listen(8080, () => {
            console.log('Server running on port 8080')
        })
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect to database');
	}
};

//Execute the function
main();

/**
 * Create client router
 */

//Dependencies
import express from 'express';
import { Client } from '../entities/Client';

const router = express.Router();

router.post('/api/create', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        balance
    } = req.body

    //Create the Client Obj
    const client = Client.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        balance
    })

    //Save the client object 
    await client.save()
    //Give a response 
    return res.json(client)

}); //Export the router
export { router as createClientRouter };

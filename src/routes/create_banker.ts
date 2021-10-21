/**
 * Bankers routes
 */

//Dependencies 
import express from "express";
import { Banker } from "../entities/Banker";

const router = express.Router()

router.post('/api/banker', async (req,res) => {
    const {
        firstName,
        lastName,
        email,
        cardNumber,
        employeeNumber
    } = req.body
    
    //Create the banker 
    const banker = Banker.create({
        first_name: firstName,
        last_name: lastName,
        email,
        card_number: cardNumber,
        employee_number:employeeNumber
    })

    //Save to database
    await banker.save()

    //Send a response
    return res.json(banker)
})

export {
    router as createBankerRouter
}
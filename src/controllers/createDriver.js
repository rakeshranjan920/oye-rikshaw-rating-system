/**
 * API - /driver/create
 * DESC - Create Driver
 */

const Driver = require('../models/Driver')
const createDriver = async (req, res) => {
    try{
        const {name, phone} = req.body
        if(!phone || !name) {
            throw new Error('Please enter name and phone')
        }
        const driver = new Driver({
            name,
            phone
        })
        await driver.save()
        res.send(driver)
    } catch(err){
        res.status(400).send({err: err.message})
    }
}

module.exports = createDriver;
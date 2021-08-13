'use strict';
const express = require('express');
const router = express.Router();
const {Customerdata} = require('../models/index');
router.get('/customer', getCustomer);
router.post('/customer', createCustomer);
router.put('/customer/:id', updatecustomer);
router.delete('/customer/:id', deletecustomer);

async function getCustomer(req, res) {
    let customer = await Customerdata.read();
    res.status(200).json(customer);
}

async function createCustomer(req, res) {
    let newCustomer = req.body;
    let customer = await Customerdata.create(newCustomer);
    res.status(200).json(customer);
}
async function updatecustomer(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let found = await Customerdata.findOne({ where: {id: id} });
    let updatedcustomer = await found.update(obj);
    res.status(200).json(updatedcustomer);
}
async function deletecustomer(req,res) {
    let id = parseInt(req.params.id);
    let deletedcustomer = await Customerdata.destroy({where: {id: id}});
    res.status(204).json(deletedcustomer);
}
module.exports = router;
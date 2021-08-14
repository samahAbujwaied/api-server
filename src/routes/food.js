'use strict';
const express = require('express');
const router = express.Router();
const {foodData} = require('../models/index');
router.get('/food', getFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getFood(req, res) {
    let food = await foodData.read();
    res.status(200).json(food);
}

async function createFood(req, res) {
    let newfood = req.body;
    let food = await foodData.create(newfood);
    res.status(200).json(food);
}
async function updateFood(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let found = await foodData.findOne({ where: {id: id} });
    let updatedfood= await found.update(obj);
    res.status(200).json(updatedfood);
}
async function  deleteFood(req,res) {
    let id = parseInt(req.params.id);
    let deletedfood = await foodData.destroy({where: {id: id}});
    res.status(204).json(deletedfood);
}
module.exports = router;
'use strict';
const express = require('express');
const router = express.Router();
const {clothesData} = require('../models/index');
router.get('/clothes', getClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

async function getClothes(req, res) {
    let clothes = await clothesData.read();
    res.status(200).json(clothes);
}

async function createClothes(req, res) {
    let newclothes = req.body;
    let clothes = await clothesData.create(newclothes);
    res.status(200).json(clothes);
}
async function updateClothes(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let found = await clothesData.findOne({ where: {id: id} });
    let updatedclothes= await found.update(obj);
    res.status(200).json(updatedclothes);
}
async function deleteClothes(req,res) {
    let id = parseInt(req.params.id);
    let deletedclothes = await clothesData.destroy({where: {id: id}});
    res.status(204).json(deletedclothes);
}
module.exports = router;
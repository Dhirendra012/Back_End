const Test = require('../models/Test');
const mongoose = require('mongoose');

const getData = async ( req , res ) => {
    const msg = await Test.find({});
    res.status(200).json({ msg });
}

const createData = async ( req , res ) => {
    // console.log(req.body.data);
    const msg = await Test.create(req.body.data);
    res.status(200).json({ msg });
}

module.exports = {
    getData, createData
}
const Tracker = require('../models/tracker');

const getXpenseData = async(req, res, next) => {
    
    try{
        console.log('RUNNN  line 6')
    const allExpence = await Tracker.findAll()
    res.status(200).json({totalXpense: allExpence})
    }
    catch(err) {
        console.log(err)
    }
}

const postXpenseData = async(req, res, next) => {
    console.log('Run line 16')
    try{
    const data = await Tracker.create(req.body)
    res.status(201).json({newDetails: data})
    }
    catch(err) {
        console.log(err)
    }
}

const deleteData = async(req, res, next) => {
    
    try{
    if(req.params.id === 'undefined'){
        console.log('ID is missing')
        res.status(400).json({err: 'No ID FOUND'})
    }

    const xpensId = req.params.id;
    console.log(xpensId)
    console.log('line 35')
    await Tracker.destroy({where: {id: xpensId}})
    res.sendStatus(200)
}
catch(err) {
    console.log(err)
}
}

module.exports = {getXpenseData, postXpenseData, deleteData}
const Bootcamp = require ('../models/Bootcamp');
const asyncHandler = require ('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse')


exports.getAllBootcamps = asyncHandler(async (req, res, next) => {


    let query;

    const reQuery = {...req.query};

    const removeFields = ['sort'];

    console.log(req.query);

    removeFields.forEach((val) => delete reQuery[val]);

    console.log(reQuery)

    let queryStr = JSON.stringify(reQuery);

    queryStr = queryStr.replace(
        /\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`
    );
console.log(queryStr);

query = Bootcamp.find(JSON.parse(queryStr));

if(req.query.sort){
    const sortByArr = req.query.sort.split(',');

    const sortByStr = sortByArr.join(" ");

    query = query.sort(sortByStr);
  } 
    // const bootcamps = await Bootcamp.find(JSON.parse(queryStr));

    const bootcamps = await query;

    res.status(200).json({
        success: true,
        data: bootcamps,
    })
});

exports.createNewBootcamp = asyncHandler (async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp,
    })
});

exports.updateBootcampById = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if(!bootcamp){
        return next( new ErrorResponse (`Bootcamp with id ${req.params.id} was not found`, 404))
    }

    bootcamp = await Bootcamp.findByIdAndUpdate(
        req.params.id, req.body, 
        {new: true, runValidators: true}
        );

        res.status(201).json({
            success: true,
            data: bootcamp,
        })

});

exports.deleteBootcampById = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if(!bootcamp){
        return next( new ErrorResponse (`Bootcamp with id ${req.params.id} was not found`, 404))
    }

    bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    
    res.status(200).json({
        success: true,
        data: bootcamp,
    })

});
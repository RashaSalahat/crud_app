var Pharmdb = require('../model/model');
var Gamedb = require('../modelgame/model');
// This file is for the 4 CRUD Operations:
// create and save new user 
// Api Request
//create call back function:
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"}); // when the req make a post req with empty body 
        return; // if the user make an empty req
    }
// Whenever the user make a post Req using a form ,
//All the data of the form is stored in the body of the req object
//and using this body we can access all the form Data
//Get Data from post method: and create and instance called user of the Userdb model
    // new user , new instance of the userdb schema 
    const pharm = new Pharmdb({
        //values for the user Schema 
        //When the user make a post req: 
        name : req.body.name,
        country : req.body.country,
        drname :req.body.drname,
        address : req.body.address,
        status: req.body.status,
        duty : req.body.duty,

    })

    // save user (Data) in the database
    //.save (object we declared above) 
    pharm
        .save(pharm) 
        .then(data => {
          //  res.send(data); //For Postman
            res.redirect('/add-pharm'); //For actual App//redirect the user to a page you can redirect them to any page you want 
        })
        .catch(err =>{

            res.status(500).send({
            // if this variable(err.message) return nothing 
            //i'm going to specify value :"Some error occurred while creating a create operation"
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){ // if the user wanted to find a selected id 
      //  retrive and return a single user we use params in postman + select a certain id the url is diff like this : http://localhost:3000/api/users?id=6252e9a55b5291c52a429dbd
        const id = req.query.id; 
        Pharmdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found pharmacy with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving pharmacy with id " + id})
            })

    }else{
        //return all records inside the database
        Pharmdb.find()
            .then(pharm => {
                res.send(pharm)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving pharmacy information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Pharmdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update pharmacy with ${id}. Maybe pharmacy not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update pharmacy information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id; //get id value from the req

    Pharmdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){ //if we don't have data
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Pharmacy was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Pharmacy with id=" + id
            });
        });
}


//games

exports.creategame = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"}); // when the req make a post req with empty body 
        return; // if the user make an empty req
    }
// Whenever the user make a post Req using a form ,
//All the data of the form is stored in the body of the req object
//and using this body we can access all the form Data
//Get Data from post method: and create and instance called user of the Userdb model
    // new user , new instance of the userdb schema 
    const game = new Gamedb({
        //values for the user Schema 
        //When the user make a post req: 
        name : req.body.name,
        describtion : req.body.describtion,
        type: req.body.type,
        stores : req.body.stores
    })

    // save user (Data) in the database
    //.save (object we declared above) 
    game
        .save(game) 
        .then(data => {
          //  res.send(data); //For Postman
            res.redirect('/add-game'); //For actual App//redirect the user to a page you can redirect them to any page you want 
        })
        .catch(err =>{

            res.status(500).send({
            // if this variable(err.message) return nothing 
            //i'm going to specify value :"Some error occurred while creating a create operation"
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.findgame = (req, res)=>{

    if(req.query.id){ // if the user wanted to find a selected id 
      //  retrive and return a single user we use params in postman + select a certain id the url is diff like this : http://localhost:3000/api/users?id=6252e9a55b5291c52a429dbd
        const id = req.query.id; 
        Gamedb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found game with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving game with id " + id})
            })

    }else{
        //return all records inside the database
        Gamedb.find()
            .then(game => {
                res.send(game)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving game information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.updategame = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Gamedb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update game with ${id}. Maybe game not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update game information"})
        })
}

// Delete a user with specified user id in the request
exports.deletegame = (req, res)=>{
    const id = req.params.id; //get id value from the req

    Gamedb.findByIdAndDelete(id)
        .then(data => {
            if(!data){ //if we don't have data
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "Game was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete Game with id=" + id
            });
        });
}
const axios = require('axios'); //for get request // axios module allows us to make a req

// we export homeRoutes to use it in different files
exports.homeRoutes = (req, res) => {
//res.render('index',{users:"New Data"});// this command as is without api information // Now instead of displaying New Data as sentence we will display the data from mongodb
 // Make a get request to /api/users
// inside response.data  we have all records in database
// { users : response.data } : to return all users from Database
axios.get('http://localhost:3000/api/pharms') //this get req return promise
.then(function(response){
console.log(response.data);
res.render('index', { pharms : response.data });  //pass the data with this render method
//users : "New Data" pass the value to this user key , we can access this variable inside the index file
})
.catch(err =>{
res.send(err);
})
    
}


//response.data will print the doc 

exports.add_pharm = (req, res) =>{
    res.render('add_pharm');
}



  //  res.render('update_user');
//{ params : { id : req.query.id }} I want a specific user from database
// to get a specific user data according to the params which means the data in the params is the new data to be updated

exports.update_pharm = (req, res) =>{
    axios.get('http://localhost:3000/api/pharms', { params : { id : req.query.id }})//get this data (we pass the id var here)
        .then(function(pharmdata){
            res.render("update_pharm", { pharm : pharmdata.data}) // then pass that data to this user object
        })
        .catch(err =>{
            res.send(err);
        })
}

/*


*/

// we export homeRoutes to use it in different files
exports.homeRoutesgame = (req, res) => {
//res.render('index',{users:"New Data"});// this command as is without api information // Now instead of displaying New Data as sentence we will display the data from mongodb
 // Make a get request to /api/users
// inside response.data  we have all records in database
// { users : response.data } : to return all users from Database
axios.get('http://localhost:3000/api/games') //this get req return promise
.then(function(response){
console.log(response.data);
res.render('indexgame', { games : response.data });  //pass the data with this render method
//users : "New Data" pass the value to this user key , we can access this variable inside the index file
})
.catch(err =>{
res.send(err);
})
    
}


//response.data will print the doc 

exports.add_game = (req, res) =>{
    res.render('add_game');
}



  //  res.render('update_user');
//{ params : { id : req.query.id }} I want a specific user from database
// to get a specific user data according to the params which means the data in the params is the new data to be updated

exports.update_game = (req, res) =>{
    axios.get('http://localhost:3000/api/games', { params : { id : req.query.id }})//get this data (we pass the id var here)
        .then(function(gamedata){
            res.render("update_game", { game : gamedata.data}) // then pass that data to this user object
        })
        .catch(err =>{
            res.send(err);
        })
}


exports.homeRoutesclinic = (req, res) => {
    //res.render('index',{users:"New Data"});// this command as is without api information // Now instead of displaying New Data as sentence we will display the data from mongodb
     // Make a get request to /api/users
    // inside response.data  we have all records in database
    // { users : response.data } : to return all users from Database
    axios.get('http://localhost:3000/api/clinics') //this get req return promise
    .then(function(response){
    console.log(response.data);
    res.render('indexclinic', { clinics : response.data });  //pass the data with this render method
    //users : "New Data" pass the value to this user key , we can access this variable inside the index file
    })
    .catch(err =>{
    res.send(err);
    })
        
    }
    
    
    //response.data will print the doc 
    
    exports.add_clinic = (req, res) =>{
        res.render('add_clinic');
    }
    
    
    
      //  res.render('update_user');
    //{ params : { id : req.query.id }} I want a specific user from database
    // to get a specific user data according to the params which means the data in the params is the new data to be updated
    
    exports.update_clinic = (req, res) =>{
        axios.get('http://localhost:3000/api/clinics', { params : { id : req.query.id }})//get this data (we pass the id var here)
            .then(function(clinicdata){
                res.render("update_clinic", { clinic : clinicdata.data}) // then pass that data to this user object
            })
            .catch(err =>{
                res.send(err);
            })
    }
    ///Doctors:

    exports.homeRoutesdoctor = (req, res) => {
        //res.render('index',{users:"New Data"});// this command as is without api information // Now instead of displaying New Data as sentence we will display the data from mongodb
         // Make a get request to /api/users
        // inside response.data  we have all records in database
        // { users : response.data } : to return all users from Database
        axios.get('http://localhost:3000/api/doctors') //this get req return promise
        .then(function(response){
        console.log(response.data);
        res.render('indexdoctor', { doctors : response.data });  //pass the data with this render method
        //users : "New Data" pass the value to this user key , we can access this variable inside the index file
        })
        .catch(err =>{
        res.send(err);
        })
            
        }
        
        
        //response.data will print the doc 
        
        exports.add_doctor = (req, res) =>{
            res.render('add_doctor');
        }
        
        
        
          //  res.render('update_user');
        //{ params : { id : req.query.id }} I want a specific user from database
        // to get a specific user data according to the params which means the data in the params is the new data to be updated
        
        exports.update_doctor = (req, res) =>{
            axios.get('http://localhost:3000/api/doctors', { doctors : { id : req.query.id }})//get this data (we pass the id var here)
                .then(function(doctordata){
                    res.render("update_doctor", { doctor : doctordata.data}) // then pass that data to this user object
                })
                .catch(err =>{
                    res.send(err);
                })
        }
        


    
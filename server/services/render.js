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

//this file to render different files using router
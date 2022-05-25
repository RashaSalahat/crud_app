const express = require('express');
//const app = express() would create new app so we create route
const route = express.Router() // method of express :we create a different touter in a separate file

const services = require('../services/render');
const controller = require('../controller/controller');

const  credential = {
  email : "admin@gmail.com",
  password : "admin123"
}
route.get('/login', (req, res) => {
  if(req.session.email){
      res.render('dashboard', {user : req.session.user})
  }else{
      res.send("Unauthorize User")
  }
})
// login user
route.post('/login', (req, res)=>{
  if(req.body.email == credential.email && req.body.password == credential.password){
      req.session.user = req.body.email;
      res.redirect('/dashboard');
      //res.end("Login Successful...!");
  }else{
      res.end("Invalid Username")
  }
});

// route for dashboard
route.get('/dashboard', (req, res) => {

      res.render('dashboard', {user : req.session.user})
  
})

// route for logout
route.get('/logout', (req ,res)=>{
  req.session.destroy(function(err){
      if(err){
          res.render('login', {user : req.session.user})
      }else{
          res.render('base', { title: "Express", logout : "logout Successfully...!"})
      }
  })
})

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/ph', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-pharm', services.add_pharm)

/**
  *  @description for update user
  *  @method GET /update-user
  */
route.get('/update-pharm', services.update_pharm)


// API/*
route.post('/api/pharms', controller.create);
route.get('/api/pharms', controller.find); // this route to get single & multiple users
route.put('/api/pharms/:id', controller.update);
route.delete('/api/pharms/:id', controller.delete);

/**
 *  @description Root Route
 *  @method GET /
 */
 route.get('/ga', services.homeRoutesgame);

 /**
  *  @description add users
  *  @method GET /add-user
  */
 route.get('/add-game', services.add_game)
 
 /**
   *  @description for update user
   *  @method GET /update-user
   */
 route.get('/update-game', services.update_game)
 
 
 // API/*
 route.post('/api/games', controller.creategame);
 route.get('/api/games', controller.findgame); // this route to get single & multiple users
 route.put('/api/games/:id', controller.updategame);
 route.delete('/api/games/:id', controller.deletegame);



route.get('/cl', services.homeRoutesclinic);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-clinic', services.add_clinic)

/**
  *  @description for update user
  *  @method GET /update-user
  */
route.get('/update-clinic', services.update_clinic)


// API/*
route.post('/api/clinics', controller.createclinic);
route.get('/api/clinics', controller.findclinic); // this route to get single & multiple clinics
route.put('/api/clinics/:id', controller.updateclinic);
route.delete('/api/clinics/:id', controller.deleteclinic);


//doctor


route.get('/doc', services.homeRoutesdoctor);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-doctor', services.add_doctor)

/**
  *  @description for update user
  *  @method GET /update-user
  */
route.get('/update-doctor', services.update_doctor)


// API/*
route.post('/api/doctors', controller.createdoctor);
route.get('/api/doctors', controller.finddoctor); // this route to get single & multiple users
route.put('/api/doctors/:id', controller.updatedoctor);
route.delete('/api/doctors/:id', controller.deletedoctor);





module.exports = route
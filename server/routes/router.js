const express = require('express');
//const app = express() would create new app so we create route
const route = express.Router() // method of express :we create a different touter in a separate file

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

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


module.exports = route
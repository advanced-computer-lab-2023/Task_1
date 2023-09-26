// #Task route solution
const userModel = require('../Models/User.js');
const { default: mongoose } = require('mongoose');

const createUser = async(req,res) => {
   //add a new user to the database with 
   //Name, Email and Age
}

const getUsers = async (req, res) => {
   //retrieve all users from the database
  }

module.exports = {createUser, getUsers};

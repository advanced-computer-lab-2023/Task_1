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


const updateUser = async (req, res) => {
   //update a user in the database
  }

const deleteUser = async (req, res) => {
   //delete a user from the database
  }


module.exports = {createUser, getUsers, updateUser, deleteUser};

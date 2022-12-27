const express = require('express')
const userController = require('../controllers/user')

const userRouter = express.Router()

userRouter
  .post('/', (req, resp) => {
    userController.create(req.body, function(err, res) {
      let respObj
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: res
      }
      resp.status(201).json(respObj)
    })
  })
  .get('/:username', function(req, resp, next) {
    const username = req.params.username
    userController.get(username, function(err, res) {
      let respObj
      if(err) {
        respObj = {
          status: "error",
          msg: err.message
        }
        return resp.status(400).json(respObj)
      }
      respObj = {
        status: "success",
        msg: res
      }
      resp.status(200).json(respObj)
    })
  })
  
  .put('/:username', function(req,resp) {
    const username = req.params.username;
    userController.update(username,req.body, function(err,res) {
      if(err)
      {
        return resp.status(400).json({
          status: "error",
          msg: err.message
        })
      }
      else
      {
        return resp.status(200).json({
          status: "success",
          msg: res
        })
      }
    })
  })
  .delete('/:username', function(req,resp) {
    const username = req.params.username;
    userController.delete(username, function(err,res) {
      if(err)
      {
        return resp.status(400).json({
          status: "error",
          msg: err.message
        })
      }
      else
      {
        return resp.status(200).json({
          status: "success",
          msg: res
        })
      }
    })
  })
  
module.exports = userRouter

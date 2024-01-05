import userController from "../../adapter/userController";
import userRepository from "../repository/userRepository";
import Userusecase from "../../use_case/userUsecase";
import  express from "express";

const repository = new userRepository()
const useCase = new  Userusecase(repository)
const controller = new userController(useCase)

const router = express.Router()
router.post('/user/signin',(req,res)=>controller.signIn(req,res))

export default router

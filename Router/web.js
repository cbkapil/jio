import express from 'express'
import UserController from '../Controller/userController.js'
import SignupController from '../Controller/singUpController.js'
import LoginIdController from '../Controller/GeoCheckin.js'
import UserIdController from '../Controller/GetData.js'
import PropsController from '../Controller/Fetchdata.js'
import LeaveController from '../Controller/FetchLeave.js'
import LeavesController from '../Controller/LeaveController.js'
import GetAttendanceController from '../Controller/GetAttendance.js'
import ExpenseController from '../Controller/sendExpense.js'
import SendTask from '../Controller/SendTask.js'
import getTaskController from '../Controller/GetTask.js'
import getExpenseController from '../Controller/GetExpense.js'
import sendlocController from '../Controller/SendLocation.js'
import signoutController from '../Controller/SignOut.js'

const router = express.Router()

router.post('/login', UserController.userLogin)
router.post('/signup',SignupController.signUp)
router.post('/search/:id',LoginIdController.insertDates)
router.get('/getdata/:id',UserIdController.getDataById)
router.get('/fetchdata/:id',PropsController.getProps)
router.get('/fetchleave/:id',LeaveController.getLeave)
router.post('/applyleave/:id',LeavesController.insertLeaves)
router.get('/getattendance/:id',GetAttendanceController.getDataById)
router.post('/sendexpenses/:id',ExpenseController.expense)
router.post('/sendtask/:id',SendTask.task)
router.get('/gettask/:id',getTaskController.getTask)
router.get('/getExpense/:id',getExpenseController.getExpense)
router.post('/sendloc/:id',sendlocController.sendLoc)
router.post('/signout/:id',signoutController.signout)

export default router
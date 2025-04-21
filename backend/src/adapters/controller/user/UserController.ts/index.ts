// import loginController from "./loginController"
// import registerController from "./registerController"
// import verifyOtpController from "./verifyOTPController"
// import logoutController from "./logoutController"
// import resendOtpController from "./resendOTPController"
// import findDoctorController from "./findDoctorController"
// import bookAppointmentController from "./bookAppointmentController"
// import changePasswordController from "./changePasswordController"




// export default (dependencies:any)=>{
//  return {

//     loginController:loginController(dependencies),
//     registerController:registerController(dependencies),
//     verifyOtpController:verifyOtpController(dependencies),
//     logoutController:logoutController(dependencies),
//     resendOtpController:resendOtpController(dependencies),
//     findDoctorController:findDoctorController(dependencies),
//     bookAppointmentController:bookAppointmentController(dependencies),
//     changePasswordController:changePasswordController(dependencies)

//  }

// }


import loginController from "./loginController"
import registerController from "./registerController"
import verifyOtpController from "./verifyOTPController"
import logoutController from "./logoutController"
import resendOtpController from "./resendOTPController"
import findDoctorController from './findDoctorController'
import updatePatientProfileController from "./updatePatientProfileController"
import viewDoctorDetailsController from "./viewDoctorDetailsController"
import generateOtpController from "./generateOTPController"
import getAvailableSlotController from "./getAvailableSlotController"
import bookAppointmentController from "./bookAppointmentController"
import createPaymentIntentController from "./createConversationController"
import loadSuccessController from "./loadSuccessController"
import searchDoctrsController from "./searchDoctorsController"
import checkOTPController from "./checkOTPController"
import appointmentDetailsController from "./appoinmentDetailsController"
import changePasswordController from "./changePasswordController"
import updateEmailController from "./updateEmailController"
import sendMessegesController from "./sendMessagesController"
import createConverstationController from "./createConversationController"
import getConverstationByIdController from "./getConversationByIdController"
import getConverstationsController from "./getConversationsController"
import getConsultCallStatusController from './getConsultCallStatusController'
import forgotPasswordController from "./forgotPasswordController"
import getSearchQueryController from './getSearchQueryController'
import downloadPrescriptionController from "./downloadPrescriptionController"





export default (dependencies:any)=>{
 return {

    loginController:loginController(dependencies),
    registerController:registerController(dependencies),
    verifyOtpController:verifyOtpController(dependencies),
    logoutController:logoutController(dependencies),
    resendOtpController:resendOtpController(dependencies),
    findDoctorController:findDoctorController(dependencies),
    updatePatientProfileController:updatePatientProfileController(dependencies),
    viewDoctorDetailsController:viewDoctorDetailsController(dependencies),
    generateOtpController:generateOtpController(dependencies),
    getAvailableSlotController:getAvailableSlotController(dependencies),
    bookAppointmentController:bookAppointmentController(dependencies),
    createPaymentIntentController:createPaymentIntentController(dependencies),
    loadSuccessController:loadSuccessController(dependencies),
    searchDoctrsController:searchDoctrsController(dependencies),
    checkOTPController:checkOTPController(dependencies),
    appointmentDetailsController:appointmentDetailsController(dependencies),
    changePasswordController:changePasswordController(dependencies),
    updateEmailController:updateEmailController(dependencies),
    sendMessegesController:sendMessegesController(dependencies),
    createConverstationController:createConverstationController(dependencies),
    getConverstationByIdController:getConverstationByIdController(dependencies),
    getConverstationsController:getConverstationsController(dependencies),
    getConsultCallStatusController:getConsultCallStatusController(dependencies),
    forgotPasswordController:forgotPasswordController(dependencies),
    getSearchQueryController:getSearchQueryController(dependencies),
    downloadPrescriptionController:downloadPrescriptionController(dependencies)

    

 }

}
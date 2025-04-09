import loginController from "./loginController"
import registerController from "./registerController"
import verifyOtpController from "./verifyOTPController"
import logoutController from "./logoutController"
import resendOtpController from "./resendOTPController"




export default (dependencies:any)=>{
 return {

    loginController:loginController(dependencies),
    registerController:registerController(dependencies),
    verifyOtpController:verifyOtpController(dependencies),
    logoutController:logoutController(dependencies),
    resendOtpController:resendOtpController(dependencies),
    

 }

}
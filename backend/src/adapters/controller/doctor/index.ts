// import loginController from "./loginController"
import doctorRegisterController from "./doctorRegisterController";
import doctorVerifyOtpController from "./docotorVerifyOTPController";
import doctorLoginController from "./doctorLoginController";
import doctorLogoutController from "./doctorLogoutController";

export default (dependencies: any) => {
   return {

      doctorRegisterController: doctorRegisterController(dependencies),
      doctorVerifyOtpController: doctorVerifyOtpController(dependencies),
      doctorLoginController: doctorLoginController(dependencies),
      doctorLogoutController: doctorLogoutController(dependencies),



   }

} 
// import loginController from "./loginController"
import doctorRegisterController from "./DoctorController/doctorRegisterController";
import doctorVerifyOtpController from "./DoctorController/docotorVerifyOTPController";
import doctorLoginController from "./DoctorController/doctorLoginController";
import doctorLogoutController from "./DoctorController/doctorLogoutController";

export default (dependencies: any) => {
   return {

      doctorRegisterController: doctorRegisterController(dependencies),
      doctorVerifyOtpController: doctorVerifyOtpController(dependencies),
      doctorLoginController: doctorLoginController(dependencies),
      doctorLogoutController: doctorLogoutController(dependencies),



   }

} 
// import loginController from "./loginController"
import doctorRegisterController from "./doctorRegisterController";
import doctorVerifyOtpController from "./docotorVerifyOTPController";
import doctorLoginController from "./doctorLoginController";
import doctorLogoutController from "./doctorLogoutController";
import kycController from "./kycController";
import updateDoctorProfileController from './updateDoctorProfileController'
import googleRegisterController from "./googleRegisterController";
import addSlotController from "./addSlotController";
import showAppoinmentsController from "./showAppoinmentController";
import getAlreadyScheduledSlotesController from "./getAlreadySchedulesSlotesController";
import getDoctorConverstationByIdController from "./getDoctorConversationByIdController";
import doctorSendMessegesController from "./doctorSendMessagesController";
import getDoctorConverstationsController from "./getDoctorConversationsController";
import getKycStatusController from "./getKycStatusController";
import getAppoinmentDetailsController from "./getAppoinmentDetailsController";
import getConvetsationIdForVideoCallController from "./getConversationIdForVideoCallController";
import addPrescriptionController from "./addPrescriptionController";
import updateConsultCallStatusController from "./updateConsultCallStatusController";
import changePasswordForDocController from "./changePasswordForDocController";
import forgotPasswordForDocController from "./forgotPasswordForController";
import updateEmailFORDOCController from "./updateEmailFORDOCController";
import uploadImageController from "./uploadImageController";
export default (dependencies: any) => {
   return {

      doctorRegisterController: doctorRegisterController(dependencies),
      doctorVerifyOtpController: doctorVerifyOtpController(dependencies),
      doctorLoginController: doctorLoginController(dependencies),
      doctorLogoutController: doctorLogoutController(dependencies),
      kycController: kycController(dependencies),
      updateDoctorProfileController: updateDoctorProfileController(dependencies),
      googleRegisterController: googleRegisterController(dependencies),
      addSlotController: addSlotController(dependencies),
      showAppoinmentsController: showAppoinmentsController(dependencies),
      getAlreadyScheduledSlotesController: getAlreadyScheduledSlotesController(dependencies),
      getDoctorConverstationByIdController: getDoctorConverstationByIdController(dependencies),
      doctorSendMessegesController: doctorSendMessegesController(dependencies),
      getDoctorConverstationsController: getDoctorConverstationsController(dependencies),
      getKycStatusController: getKycStatusController(dependencies),
      getAppoinmentDetailsController: getAppoinmentDetailsController(dependencies),
      getConvetsationIdForVideoCallController: getConvetsationIdForVideoCallController(dependencies),
      addPrescriptionController: addPrescriptionController(dependencies),
      updateConsultCallStatusController: updateConsultCallStatusController(dependencies),
      changePasswordForDocController: changePasswordForDocController(dependencies),
      forgotPasswordForDocController: forgotPasswordForDocController(dependencies),
      updateEmailFORDOCController: updateEmailFORDOCController(dependencies),
      uploadImageController:uploadImageController(dependencies)


   }

} 
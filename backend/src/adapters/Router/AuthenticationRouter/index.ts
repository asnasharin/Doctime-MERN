import express from 'express';

import { UserController } from '../../controller';
import { adminAuthController } from '../../controller';



export default (dependencies: any) => {
  const router = express();



  // ===============================================================================================
  // USER ROUTES
  // ===============================================================================================

  const { loginController, registerController, verifyOtpController, logoutController,
    resendOtpController, findDoctorController
  } = UserController(dependencies);

  router.post('/login', loginController);
  router.post('/register', registerController);
  router.post('/verifyOtp', verifyOtpController);
  router.get('/logout', logoutController);
  router.get('/resendOtp', resendOtpController);
  router.get('/findDoctor', findDoctorController);
 
  // ===============================================================================================
  // ADMIN ROUTES
  // ===============================================================================================
  const { adminLoginController, adminLogoutController } = adminAuthController(dependencies);
  router.post('/admin', adminLoginController);
  router.get('/adminHome', adminLoginController);
  router.post('/adminLogout', adminLogoutController)
  // ========== //  
 
  return router;
};

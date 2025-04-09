import express from 'express';

// import { UserController } from '../../controller/user/UserController.ts';

import { UserController } from '../../controller';



export default (dependencies: any) => {
  const router = express();



  // ===============================================================================================
  // USER ROUTES
  // ===============================================================================================

  const { loginController, registerController, verifyOtpController, logoutController,
    resendOtpController
  } = UserController(dependencies);

  router.post('/login', loginController);
  router.post('/register', registerController);
  router.post('/verifyOtp', verifyOtpController);
  router.get('/logout', logoutController);
  router.get('/resendOtp', resendOtpController);
 


  return router;
};

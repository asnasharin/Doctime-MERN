// import { userRepositery } from '../repository'
// import { doctorRepositery } from '../repository'


// import {
//     loginUseCase, registerUseCase, verifyOtpUseCase, 
// } from '../../application/usecase'


// import {
//     doctorRegisterUseCase,
//     doctorVerifyOtpUseCase, doctorLoginUseCase, doctorLogoutUseCase
// } from '../../application/usecase'

// import {
//     adminLoginUseCase, adminUserUseCase, adminDoctorUseCase, getKycDetailsUseCase, kycStatusUseCase, googleRegisterUseCase,
//     handleUserBlockUseCase,handleDoctorBlockUseCase,adminLogoutUseCase,getAllAppoinmentsUseCase
// } from '../../application/UseCases'
// // import adminRepository from '../repository/adminRepository'



// const useCase: any = {
//     loginUseCase,
//     registerUseCase,
//     verifyOtpUseCase,
//     doctorRegisterUseCase,
//     doctorVerifyOtpUseCase,
//     doctorLoginUseCase,
//     doctorLogoutUseCase,
//     adminLoginUseCase,

// }


// const repositery: any = {
//     userRepositery,
//     doctorRepositery,
//     adminRepository

// }


// export default {
//     useCase, repositery
// }

import { userRepositery } from '../repository'
import { adminRepository } from '../repository'
import { doctorRepositery } from '../repository'


import {
    loginUseCase, registerUseCase, verifyOtpUseCase, findDoctorUseCase
} from '../../application/usecase'

import {
    doctorRegisterUseCase,
    doctorVerifyOtpUseCase, doctorLoginUseCase, doctorLogoutUseCase
} from '../../application/usecase'


import {
    adminLoginUseCase,
} from '../../application/usecase'











const useCase: any = {
    loginUseCase,
    registerUseCase,
    verifyOtpUseCase,
    adminLoginUseCase,
    doctorRegisterUseCase,
    doctorVerifyOtpUseCase,
    doctorLoginUseCase,
    doctorLogoutUseCase,
    findDoctorUseCase
   











}


const repositery: any = {
    userRepositery,
    adminRepository,
    doctorRepositery

}


export default {
    useCase, repositery
}

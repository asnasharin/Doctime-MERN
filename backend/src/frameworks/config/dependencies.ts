import { userRepositery } from '../repository'
import { adminRepository } from '../repository'
import { doctorRepositery } from '../repository'

import {
    loginUseCase, registerUseCase, verifyOtpUseCase, findDoctorUseCase, bookAppointmentUseCase,
    changePasswordUseCase
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
    findDoctorUseCase,
    bookAppointmentUseCase,
    changePasswordUseCase
   











}


const repositery: any = {
    userRepositery,
    adminRepository,
    doctorRepositery

}


export default {
    useCase, repositery
}

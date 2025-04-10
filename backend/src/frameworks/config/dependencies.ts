import { userRepositery } from '../repository'
import { doctorRepositery } from '../repository'


import {
    loginUseCase, registerUseCase, verifyOtpUseCase, 
} from '../../application/usecase'


import {
    doctorRegisterUseCase,
    doctorVerifyOtpUseCase, doctorLoginUseCase, doctorLogoutUseCase
} from '../../application/usecase'


const useCase: any = {
    loginUseCase,
    registerUseCase,
    verifyOtpUseCase,
    doctorRegisterUseCase,
    doctorVerifyOtpUseCase,
    doctorLoginUseCase,
    doctorLogoutUseCase,

}


const repositery: any = {
    userRepositery,
    doctorRepositery

}


export default {
    useCase, repositery
}

import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./Redux/store";
import App from "./App";
import AdminApp from "./AdminApp";
import DoctorApp from "./DoctorApp";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import VerifyOTP from "./pages/VerifyOTP";
import HomePage from "./pages/HomePage";
import MyProfile from "./pages/MyProfile";
import LandingPage from "./pages/LandingPage";
import FindingDoctorPage from "./pages/FindingDoctorPage";
import ViewDoctorDetailsPage from "./pages/ViewDoctorDetailsPage";
import UpdateEmailComponent from "./components/UpdateEmail/UpdateEmailComponent";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import ForgotPassword from "./pages/ForgotPasswordPage";
import AppointmentDetailsPage from "./pages/AppointmentDetailsPage";
import ChatPage from "./pages/ChatPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import AdminLoginPage from "./AdminPages/AdminLoginPage";
import AdminHomePage from "./AdminPages/AdminHomePage";
import UserListingPage from "./AdminPages/UserListingPage";
import DoctorListingPage from "./AdminPages/DoctorListingPage";
import ShowingKycDetails from "./AdminPages/ShowingKycDetails";
import WalletPage from "./AdminPages/WalletPage";
import DoctorLoginPage from "./DoctorPages/DoctorLoginPage";
import DoctorRegisterPage from "./DoctorPages/doctorRegisterPage";
import DoctorOtpPage from "./DoctorPages/DoctorOtpPage";
import DoctorHomePage from "./DoctorPages/DoctorHomePage";
import DoctorProfilePage from "./DoctorPages/DoctorProfilePage";
import KYC from "./DoctorPages/KYCPage";
import CelenderPage from "./DoctorPages/CelenderPage";
import AppointmentListPage from "./DoctorPages/AppointmentListPage";
import ChatPageForDoc from "./pages/ChatPageForDoc";
import VideoCall from "./REAL_TIME/VIDEO_CALL/VideoCall";
import DoctorAppointmentTablePage from "./DoctorPages/DoctorAppointmentTablePage";
import ChangePasswordForDocPage from "./DoctorPages/changePasswordForDocPage";
import ForgotPasswordForDocPage from "./DoctorPages/ForgotPasswordForDocPage";
import UpdateEmailForDoc from "./DoctorComponent/DoctorProfile/UpdateEmailForDoc";
import SlotPage from "./DoctorPages/SlotPage";
import SlotCreatePage from "./DoctorPages/SlotCreatePage";
import {
  DoctorPrivateRoute,
  PrivateRoute,
  PublicRoute,
  DoctorPublicRoute,
  AdminPrivateRoute,
} from "./PriviteRoute/PrivateRoute";
import ErrorPage from "./Error/ErrorPage";
import "./index.css";

// ====== Routes ======

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* User routes */}
      <Route path="/" element={<App />}>
        <Route index element={<LandingPage />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

        <Route path="/verifyOtp" element={<VerifyOTP />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/findDoctor" element={<FindingDoctorPage />} />
        <Route path="/viewDoctorDetails/:id" element={<ViewDoctorDetailsPage />} />
        <Route path="/updateEmail" element={<UpdateEmailComponent />} />
        <Route path="/bookAppointment" element={<CheckoutPage />} />
        <Route path="/successAppointment" element={<SuccessPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/appointmentDetails" element={<AppointmentDetailsPage />} />
        <Route path="/showChatPage/:convesationId" element={<ChatPage />} />
        <Route path="/changePassword" element={<ChangePasswordPage />} />
      </Route>

      {/* Doctor routes */}
      <Route path="/" element={<DoctorApp />}>
        <Route element={<DoctorPublicRoute />}>
          <Route path="/doctorLogin" element={<DoctorLoginPage />} />
          <Route path="/DoctorRegister" element={<DoctorRegisterPage />} />
        </Route>

        <Route element={<DoctorPrivateRoute />}>
          <Route path="/doctorHome" element={<DoctorHomePage />} />
        </Route>

        <Route path="/doctorVerifyOtp" element={<DoctorOtpPage />} />
        <Route path="/doctorProfile" element={<DoctorProfilePage />} />
        <Route path="/kycAuth" element={<KYC />} />
        <Route path="/addingSlot" element={<SlotPage />} />
        <Route path="/createSlot" element={<SlotCreatePage />} />
        <Route path="/addSlot" element={<CelenderPage />} />
        <Route path="/showAppointments" element={<AppointmentListPage />} />
        <Route path="/showChat/:convesationId" element={<ChatPageForDoc />} />
        <Route path="/showDoctorAppointment" element={<DoctorAppointmentTablePage />} />
        <Route path="/videoCall/:roomId/:appointmentId" element={<VideoCall />} />
        <Route path="/changePasswordForDoc" element={<ChangePasswordForDocPage />} />
        <Route path="/forgotPasswordForDoc" element={<ForgotPasswordForDocPage />} />
        <Route path="/UpdateEmailForDoc" element={<UpdateEmailForDoc />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminApp />}>
        <Route index element={<AdminLoginPage />} />

        <Route element={<AdminPrivateRoute />}>
          <Route path="/admin/adminHome" element={<AdminHomePage />} />
          <Route path="/admin/getAllUsers" element={<UserListingPage />} />
          <Route path="/admin/getAllDoctors" element={<DoctorListingPage />} />
          <Route path="/admin/getKycDetails/:doctorId" element={<ShowingKycDetails />} />
          <Route path="/admin/wallet" element={<WalletPage />} />
        </Route>
      </Route>

      {/* Error page */}
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

// ====== Render ======

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

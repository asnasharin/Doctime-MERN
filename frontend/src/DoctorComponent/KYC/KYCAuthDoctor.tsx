import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../AxiosConfig/axiosInstance";

const KYCAuthDoctor: React.FC = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [hospitalName, setHospitalName] = useState("");
  const [convertedCertificateImage, setConvertedCertificateImage] = useState<string | ArrayBuffer | null>(null);
  const [convertedQualificationImage, setConvertedQualificationImage] = useState<string | ArrayBuffer | null>(null);
  const [kycStatus, setKycStatus] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const doctor = useSelector((state: any) => state.persisted.doctorAuth);
  const email = doctor?.doctor?.email ?? null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post("/api/auth/getKycStatus", {
          id: doctor.doctor._id,
        });
        setKycStatus(response.data.data);
      } catch (error) {
        console.error("Error fetching KYC status:", error);
      }
    };

    fetchData();
  }, [doctor]);

  const handleYearsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setYearsOfExperience(!isNaN(value) ? value : 0);
  };

  const onSelectFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const convertedFile = await convertToBase64(file);
      if (event.target.id === "certificateImageInput") {
        setConvertedCertificateImage(convertedFile);
      } else if (event.target.id === "qualificationImageInput") {
        setConvertedQualificationImage(convertedFile);
      }
    }
  };

  const convertToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!convertedCertificateImage || !convertedQualificationImage || !aadhaarNumber || !hospitalName) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const data = {
        certificateImage: convertedCertificateImage,
        qualificationImage: convertedQualificationImage,
        aadhaarNumber,
        yearsOfExperience,
        hospitalName,
        email,
      };

      const response = await axiosInstance.post("/api/auth/kycAuth", data);

      if (response.data.status) {
        navigate("/doctorHome");
      } else {
        alert(response.data.message || "KYC submission failed.");
      }
    } catch (error) {
      console.error("Error during KYC submission:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <img src="/kyc/KYC_verification_img__7e0787186a.jpg" width={600} height={100} alt="Step 1" />
      <div className="bg-gray-100 p-20 rounded-lg w-200">
        {step === 1 && (
          <>
            <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-md">
              <h4 className="text-lg text-red-700 font-semibold">Your Status is: {kycStatus}</h4>
            </div>
            <br />
            <h2 className="text-2xl font-bold mb-4">KYC Authentication</h2>
            <p className="text-gray-600 mb-6">Doctor ID Verification</p>
            <div className="flex items-center mb-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={nextStep}>
                Start Verification
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-4">Verification Process</h2>
            <p className="text-gray-600 mb-6">Please provide the following information:</p>
            <form onSubmit={handleSubmit}>
              <div className="flex items-center mb-6">
                <img src="/kyc/certificat.png" alt="Certificate" className="h-8 mr-4" />
                <span>Doctor Certificate</span>
                <input type="file" accept="image/*" id="certificateImageInput" onChange={onSelectFile} />
              </div>
              <div className="flex items-center mb-6">
                <img src="/kyc/qualification.png" alt="Qualification" className="h-8 mr-4" />
                <span>Qualification</span>
                <input type="file" accept="image/*" id="qualificationImageInput" onChange={onSelectFile} />
              </div>
              <div className="flex items-center mb-6">
                <label htmlFor="aadhaar" className="mr-4">Aadhaar Number:</label>
                <input type="text" id="aadhaar" className="border border-gray-300 p-2" value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} />
              </div>
              <div className="flex items-center mb-6">
                <label htmlFor="years" className="mr-4">Years of Experience:</label>
                <input type="number" id="years" className="border border-gray-300 p-2" value={yearsOfExperience.toString()} onChange={handleYearsChange} />
              </div>
              <div className="flex items-center mb-6">
                <label htmlFor="hospital" className="mr-4">Hospital Name:</label>
                <input type="text" id="hospital" className="border border-gray-300 p-2" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
              </div>
              <div className="flex justify-between">
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={prevStep}>Back</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default KYCAuthDoctor;

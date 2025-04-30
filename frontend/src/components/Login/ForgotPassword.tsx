import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState<"email" | "otp" | "reset">("email");

  const handleSendOTP = () => {
    if (!email) return alert("Please enter a valid email.");
    console.log(`Sending OTP to ${email}`);
    setStep("otp");
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 4) return alert("Enter a valid 4-digit OTP.");
    console.log(`Verifying OTP: ${otp}`);
    // Simulate OTP verification
    setStep("reset");
  };

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return alert("Passwords do not match.");
    }
    console.log(`Password reset for ${email} with new password: ${newPassword}`);
    // Simulate success
    alert("Password reset successfully!");
  };

  return (
    <div className="flex flex-auto p-10 justify-center">
      <div className="w-1/2 pl-10 pt-10 border-r border-gray-200">
        <img src="/imgs/Tiny people carrying key to open padlock.jpg" alt="Reset Password" />
      </div>

      <div className="w-1/2 pl-10 flex items-center">
        <section className="w-full max-w-md p-6 bg-white rounded-lg shadow dark:bg-cyan-950 dark:border-gray-700">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Forgot Password</h2>

          <form onSubmit={handleSavePassword} className="space-y-4">
            {step === "email" && (
              <>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                    placeholder="example@gmail.com"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSendOTP}
                  className="btn-primary"
                >
                  Send OTP
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <div>
                  <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    minLength={4}
                    maxLength={4}
                    required
                    className="input-field"
                    placeholder="****"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleVerifyOTP}
                  className="btn-primary"
                >
                  Verify OTP
                </button>
              </>
            )}

            {step === "reset" && (
              <>
                <div>
                  <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="input-field"
                    placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="input-field"
                    placeholder="Confirm new password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Save New Password
                </button>
              </>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};

export default ForgotPassword;

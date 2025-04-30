import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Doctor } from "../../Interfaces/Doctor/DoctorInterfaces";
import axiosInstance from '../../AxiosConfig/axiosInstance';

const DoctorCard: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get<{ data: Doctor[] }>('/api/auth/findDoctor');
        setDoctors(response.data.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 mx-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((doctor, index) => (
          <DoctorItem key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

interface DoctorItemProps {
  doctor: Doctor;
}

const DoctorItem: React.FC<DoctorItemProps> = ({ doctor }) => (
  <div className="bg-gray-200 rounded-lg shadow-md transition transform hover:scale-105 duration-300 ease-in-out p-6">
    <div className="relative overflow-hidden h-48 w-full flex justify-center items-center mb-4">
      <img className="w-full h-full object-cover" src={doctor.image} alt={`Doctor ${doctor.name}`} />
    </div>

    <div className="flex flex-col justify-center items-center">
      <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
        {`DR. ${doctor.name}`}
      </h3>
      <p className="text-rose-800 font-semibold text-center">{doctor.specialization}</p>
      <p className="text-gray-600 text-center">{doctor.email}</p>
      <p className="text-green-950 font-semibold text-center">{`FEES: Rs.${doctor.fees}`}</p>

      <div className="mt-4">
        <Link to={`/viewDoctorDetails/${doctor._id}`}>
          <button className="bg-cyan-800 hover:bg-cyan-950 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default DoctorCard;

import Calendar from '../DoctorComponent/Celender/Calender';
import Footer from '../DoctorComponent/Footer/Footer';

const CelenderPage = () => {
  return (
    <div className="flex flex-col min-h-screen">  {/* Ensure it grows with screen height */}
      <div className="flex-grow">  {/* Make this part grow to take up available space */}
        <Calendar />
      </div>
      <Footer />  {/* Footer at the bottom */}
    </div>
  );
};

export default CelenderPage;

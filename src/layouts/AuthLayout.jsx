import Navbar from "./Navbar";
import Footer from "./Footer";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;


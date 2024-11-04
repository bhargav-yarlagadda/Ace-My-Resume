import { UserButton, useUser } from "@clerk/clerk-react";
import { PiSignIn } from "react-icons/pi";
import Logo from '../../public/favicon.png';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const NotLoggedIn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/auth/sign-in")}
      className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-600 transition-transform transform hover:scale-105 duration-200"
    >
      <PiSignIn className="text-lg" />
      <span className="hidden sm:inline">Sign In</span>
    </button>
  );
};

const Header = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate(); // Move useNavigate here

  return (
    <div className="flex items-center justify-between w-full px-6 py-3 bg-black text-white shadow-md animate-fade-in">
      <div className="flex items-center space-x-3">
        <img
          src={Logo}
          className="w-8 h-8 rounded-full border-2 border-blue-400 hover:rotate-12 transition-transform duration-300"
          alt="ACE My Resume Logo"
        />
        <span className="text-xl font-semibold tracking-wide text-blue-400 transition-opacity duration-500 opacity-0 animate-slide-in">
          Ace My Resume
        </span>
      </div>
      {isSignedIn ? (
        <div className="flex items-center gap-8">
          <Link to='/' className="px-6 py-2 rounded-full hover:scale-105 transition-all ease-out duration-150 hover:bg-blue-600 bg-violet-600 " >Home</Link>
          <button
            className="bg-violet-600 text-white hover:bg-violet-700 px-4 py-2 rounded-full shadow-md transition-all ease-in-out duration-300 transform hover:scale-105"
            onClick={() => navigate('/dashboard')}
          >
            Dashboard
          </button>
          <UserButton />
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </div>
  );
};

export default Header;

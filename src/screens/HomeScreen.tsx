import { useUser} from "@clerk/clerk-react"; // Import necessary Clerk components
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const { isSignedIn } = useUser(); // Get the user's sign-in status

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-700 to-blue-800 p-6 text-center shadow-lg flex flex-col items-center">
        {/* Logo */}
        <img src="/favicon.png" alt="Logo" className="h-16 rounded-3xl
         mb-4" />
        <h1 className="text-5xl font-bold">Welcome to Your Resume Builder</h1>
        <p className="mt-2 text-lg">Craft your future with a stunning resume!</p>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Section */}
          <section className="bg-gray-800 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 text-center">
            <h2 className="text-3xl font-semibold text-blue-300">Featured Templates</h2>
            <div className="mt-4 space-y-4">
              <div className="bg-gray-700 hover:bg-blue-500 rounded-lg p-4 shadow-md transition duration-200 hover:shadow-lg">
                <h3 className="font-bold">Professional Template</h3>
                <p>A clean and modern design to impress employers.</p>
              </div>
              <div className="bg-gray-700 hover:bg-blue-600 rounded-lg p-4 shadow-md transition duration-200 hover:shadow-lg">
                <h3 className="font-bold">Creative Template</h3>
                <p>Showcase your creativity with this vibrant design.</p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col justify-between transition-transform transform hover:scale-105 text-center">
            <div>
              <h2 className="text-3xl font-semibold text-blue-300">Get Started!</h2>
              <p className="mt-2">Build your resume in minutes.</p>
            </div>
            {/* Conditional rendering for buttons */}
            {isSignedIn ? (
              <Link to="/dashboard">
                <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200">
                  Go to Dashboard
                </button>
              </Link>
            ) : (
              <Link className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200" to={'auth/sign-in'} >
                Sign In
              </Link>
            )}
          </section>
        </div>

        {/* Additional Info Section */}
        <section className="mt-8 bg-gray-800 rounded-lg p-6 flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-blue-300">Why Choose Us?</h2>
          <ul className="mt-4 list-disc list-inside ">
            <li  >🌟 Easy to use and intuitive interface.</li>
            <li  >🎨 Variety of templates tailored to your needs.</li>
            <li  >📄 Download your resume in multiple formats.</li>
            <li  >💡 Get tips and guidance for each section.</li>
          </ul>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2024 Resume Builder. All rights reserved.</p>
        <div className="flex justify-center mt-2">
          <a href="#" className="mx-2 text-gray-400 hover:text-blue-300">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 text-gray-400 hover:text-blue-300">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;

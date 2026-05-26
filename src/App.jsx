function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md px-8 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-white">
          MERN Stack
        </h1>

        <ul className="hidden md:flex gap-8 text-white font-medium bg-white/10 px-6 py-2 rounded-full backdrop-blur-md">
          <li className="hover:text-yellow-300 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-yellow-300 cursor-pointer transition">
            Projects
          </li>

          <li className="hover:text-yellow-300 cursor-pointer transition">
            About
          </li>

          <li className="hover:text-yellow-300 cursor-pointer transition">
            Contact
          </li>
        </ul>

        <button className="bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center px-6 py-24">

        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Modern Frontend with React & Tailwind
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Build responsive and reusable UI components using
          React.js and Tailwind CSS for modern web applications.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
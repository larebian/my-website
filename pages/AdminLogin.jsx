import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaLock, FaUser, FaShieldAlt, FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(""); // Clear error on typing
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Yahan aap apni backend authentication API ya basic validation laga sakte hain
    setTimeout(() => {
      if (credentials.username === "admin" && credentials.password === "admin123") {
        // Successful login -> Redirect to main admin dashboard
        navigate("/admin/dashboard"); // <-- Yahan "/admin-portal" ki jagah "/admin/dashboard" kar diya hai
      } else {
        setError("Invalid username or password. Please try again.");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Back to Home Link */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
        >
          <FaArrowLeft size={12} /> Back to Website
        </Link>
      </div>

      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-10 z-10">
        
        {/* Header Logo & Title */}
        <div className="text-center flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="The Lareb Public School Logo"
            className="w-16 h-16 rounded-full border-2 border-blue-700 object-cover shadow-md mb-3"
          />
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
            <FaShieldAlt size={11} /> Secure Access
          </div>
          <h2 className="text-2xl font-black text-blue-950 tracking-tight">
            Admin Portal Login
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Enter your credentials to manage The Lareb Public School system
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 p-3 rounded-r-xl text-xs font-semibold animate-shake">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Username Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Username / Admin ID
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FaUser size={14} />
              </span>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                placeholder="Enter admin username"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-blue-700 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <FaLock size={14} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                placeholder="••••••••••••"
                className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-blue-700 focus:bg-white transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
              </button>
            </div>
          </div>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-gray-600">
              <input type="checkbox" className="rounded border-gray-300 text-blue-700 focus:ring-blue-500 w-4 h-4" />
              <span>Remember this device</span>
            </label>
            <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Please contact system supervisor to reset credentials."); }} className="text-blue-700 font-semibold hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none disabled:opacity-70 cursor-pointer"
          >
            {isLoading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Login to Dashboard"
            )}
          </button>
        </form>

        {/* Footer info inside card */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-[11px] text-gray-400">
            Authorized Personnel Only • The Lareb Public School Management
          </p>
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;
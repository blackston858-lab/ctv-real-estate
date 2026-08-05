import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* LEFT SIDE - LOGIN */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-[#113529] tracking-tight mb-3">
              Welcome Back.
            </h2>
            <p className="text-[#113529] text-lg">
              Sign in to access your real estate dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-[#113529] mb-2 block">
                Email Address
              </label>
              <div className="relative group">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#113529] transition-colors" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#113529] focus:ring-4 focus:ring-[#113529]/10 transition-all shadow-sm"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-[#113529] hover:text-[#113529]/80 transition-colors">
                  Forgot password?
                </a>
              </div>

              <div className="relative group">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#113529] group-focus-within:text-[#113529] transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#113529] focus:ring-4 focus:ring-[#113529]/10 transition-all shadow-sm"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#113529] transition-colors"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Button */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3.5 mt-4 bg-[#113529] hover:bg-[#113529]/80 rounded-xl text-white font-semibold flex justify-center items-center gap-2 transition-all shadow-md shadow-sky-500/20"
            >
              Sign In
              <FiArrowRight />
            </motion.button>
          </form>

          {/* Create Account Link */}
          <p className="mt-8 text-center text-slate-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#113529] font-semibold hover:text-[#113529]/80 transition-colors">
              Create account
            </Link>
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE - HERO */}
      <div className="hidden md:flex w-1/2 relative bg-slate-50 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
          alt="Modern Property"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Elegant light overlay instead of dark */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
        
        {/* Gradient fade for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-end p-16 text-white h-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Elevate your property management.
            </h1>
            <p className="text-slate-200 max-w-md text-lg">
              The all-in-one platform to track listings, manage clients, and close deals effortlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
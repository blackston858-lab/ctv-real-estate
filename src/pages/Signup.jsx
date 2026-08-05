import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="min-h-screen flex bg-[white] font-sans">
      
      {/* LEFT SIDE - IMAGE (Swapped sides for visual variety) */}
      <div className="hidden md:flex w-1/2 relative bg-slate-50 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687931-cecebd80d6c0?auto=format&fit=crop&q=80"
          alt="Modern Interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

        <div className="relative z-10 flex flex-col justify-end p-16 text[#113529] h-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Join the future of real estate.
            </h1>
            <p className="text-[#113529] max-w-md text-lg">
              Create your account today and experience a seamless workflow designed for modern professionals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE - SIGNUP FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-[#113529] tracking-tight mb-3">
              Create Account.
            </h2>
            <p className="text-slate-500 text-lg">
              Get started with your free dashboard today.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-[#113529] mb-2 block">
                Full Name
              </label>
              <div className="relative group">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#113529] group-focus-within:text-[#113529]/80 transition-colors" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#113529] focus:ring-4 focus:ring-[#113529]/10 transition-all shadow-sm"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Email Address
              </label>
              <div className="relative group">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#113529] transition-colors" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all shadow-sm"
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
              <label className="text-sm font-medium text-slate-700 mb-2 block">
                Password
              </label>
              <div className="relative group">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#113529] transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all shadow-sm"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#113529] hover:text-[#113529]/80 transition-colors"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Button */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3.5 mt-6 bg-[#113529] text-white  hover:bg-[#113529]/80 rounded-xl text[#113529] font-semibold flex justify-center items-center gap-2 transition-all shadow-md shadow-sky-500/20"
            >
              Create Account
              <FiArrowRight />
            </motion.button>
          </form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-[#113529]">
            Already have an account?{" "}
            <a href="/signin" className="text-[#113529] font-semibold hover:text-[#113529]/80 transition-colors">
              Sign in
            </a>
          </p>
        </motion.div>
      </div>

    </div>
  );
};

export default Signup;
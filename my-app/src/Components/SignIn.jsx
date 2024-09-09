// src/components/SignIn.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [rememberMe, setRememberMe] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.freepik.com/vetores-gratis/fundo-plano-geometrico-com-espaco-vazio_23-2148960852.jpg?t=st=1725800323~exp=1725803923~hmac=a1adf5c828cbf131645f1d5551dd3b2b0ba4974aa6f7d38b79721ff08cf7be10&w=1380)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="font-Kanit" datatheme="retro">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="card glass w-[500px] shadow-2xl relative w-[400px] sm:w-[500px]">
            <div className="card-body flex flex-col items-center">
              <h2 className="card-title text-center text-red-500 text-[30px] mb-4">Login</h2>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <label className="block mb-2 text-lg font-bold text-red-500" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded bg-white text-black focus:outline-none focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="block mb-2 text-lg font-bold text-red-500" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border rounded bg-white text-black focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                    {}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center justify-center text-sm focus:outline-none"
                    >
                      <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="mr-2 h-5 w-5 appearance-none border border-gray-300 rounded bg-white checked:bg-white checked:border-black checked:after:content-['✔'] checked:after:text-black checked:after:block checked:after:text-center focus:outline-none "
  />
                      <label className='text-gray-400' htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="/forgot-password" className="text-blue-500 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="card-actions mb-4">
                  <button type="submit" className="btn btn-primary w-full text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="flex flex-col items-center mt-4">
                <div className="flex items-center mb-4">
                  <p  className="text-sm mr-2 text-gray-400">Don't have an account?</p>
                  <a href="/signup" className="text-blue-500 hover:underline">
                    Sign up
                  </a>
                </div>
                {}
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 text-2xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="text-blue-400 hover:text-blue-600 text-2xl" />
                  </a>
                  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} className="text-blue-500 hover:text-blue-700 text-2xl" />
                  </a>
                  <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 hover:text-green-700 text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

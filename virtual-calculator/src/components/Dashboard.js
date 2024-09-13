import React from 'react';
import img8 from '../image/img8.jpg'; // Correct import path

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      {/* Main content */}
      <main
        className="flex-grow flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${img8})` }} // Use imported image
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 style={{ color: '#6B7280' }} className="text-4xl sm:text-3xl md:text-6xl">
            Virtual Hand Gesture Problem Solver
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-black-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Revolutionizing calculations with advanced machine learning and computer vision technology.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-start md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2024 Virtual Hand Gesture Calculator. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default Dashboard;
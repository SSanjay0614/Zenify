import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Home from './components/Home';
import Prediction from './components/Prediction';
import Chatbot from './components/Chatbot';
import Blog from './components/Blog';
import Doctors from './components/Doctors';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Mental Health Test', href: '/prediction' },
  { name: 'Chat Support', href: '/chatbot' },
  { name: 'Blog', href: '/blog' },
  { name: 'Expert Doctors', href: '/doctors' },
];

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
        
        {/* Navigation */}
        <header className="bg-white shadow-md">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Zenify</span>
                <div className="text-3xl font-bold text-indigo-600">Zenify</div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu */}
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                
                {/* Logo */}
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Zenify</span>
                  <div className="text-2xl font-bold text-indigo-600">Zenify</div>
                </Link>

                {/* Close menu button */}
                <button
                  type="button"
                  className="rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile menu links */}
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-auto">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-xs leading-5 text-gray-400">
                &copy; {new Date().getFullYear()} Zenify. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        
      </div>
    </Router>
  );
};

export default App;

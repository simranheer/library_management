// about/page.tsx
"use client";

import { motion } from "framer-motion";
import Head from "next/head";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <Head>
        <title>About | Library Management System</title>
        <meta
          name="description"
          content="Learn more about our Library Management System"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div variants={slideUp} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
              About Our Library Management System
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div variants={slideUp}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-8 h-full"
              >
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-700 mb-6">
                  To provide an intuitive, efficient, and modern solution for
                  managing library resources, making it easier for librarians to
                  organize collections and for patrons to discover books.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Streamline library operations with automated processes
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Enhance user experience with intuitive interfaces
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Provide comprehensive reporting and analytics
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div variants={slideUp}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-8 h-full"
              >
                <h2 className="text-2xl font-semibold text-indigo-700 mb-6">
                  Key Features
                </h2>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 bg-indigo-50 rounded-lg"
                  >
                    <h3 className="font-medium text-indigo-700 mb-2">
                      Book Catalog Management
                    </h3>
                    <p className="text-gray-600">
                      Easily add, edit, and organize your library's collection
                      with our intuitive catalog system.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 bg-indigo-50 rounded-lg"
                  >
                    <h3 className="font-medium text-indigo-700 mb-2">
                      User Management
                    </h3>
                    <p className="text-gray-600">
                      Manage patrons, track borrowing history, and set user
                      privileges with our comprehensive user system.
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-4 bg-indigo-50 rounded-lg"
                  >
                    <h3 className="font-medium text-indigo-700 mb-2">
                      Advanced Search
                    </h3>
                    <p className="text-gray-600">
                      Powerful search functionality helps users find exactly
                      what they're looking for quickly.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          Team Section
          <motion.div variants={fadeIn} className="mt-20">
            <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
              Meet The Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Lead Developer",
                  bio: "Full-stack developer with a passion for creating efficient systems.",
                },
                {
                  name: "Maria Garcia",
                  role: "UI/UX Designer",
                  bio: "Designs beautiful, user-friendly interfaces that people love to use.",
                },
                {
                  name: "Sam Wilson",
                  role: "Database Architect",
                  bio: "Ensures our data is organized, secure, and lightning fast.",
                },
                {
                  name: "Taylor Smith",
                  role: "Project Manager",
                  bio: "Keeps everything on track and communication flowing smoothly.",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 bg-indigo-200 flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-indigo-600 mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeIn}
            className="mt-20 bg-indigo-700 rounded-xl p-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Library?
            </h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of libraries already benefiting from our modern
              management system.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
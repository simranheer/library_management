// components/AddBookForm.js
'use client'
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUpload, FiBook, FiImage, FiCalendar, FiUser, FiType, FiInfo } from 'react-icons/fi';

const AddBookForm = () => {
  const router = useRouter();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    category: '',
    publishedDate: '',
  });
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const categories = [
    'Fiction', 'Non-Fiction', 'Science Fiction', 
    'Biography', 'History', 'Self-Help', 'Fantasy', 'Mystery'
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === 'coverPhoto') {
      setCoverPhoto(file);
    } else {
      setPdfFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const formPayload = new FormData();
      
      // Add text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formPayload.append(key, value);
      });
      
      // Add files
      if (coverPhoto) formPayload.append('coverPhoto', coverPhoto);
      if (pdfFile) formPayload.append('pdf', pdfFile);

      const response = await fetch('api/addbook', {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { error: 'Unknown error, no JSON returned' };
        }
        throw new Error(errorData.error || 'Failed to add book');
      }

      const result = await response.json();
      setSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          title: '',
          author: '',
          description: '',
          category: '',
          publishedDate: '',
        });
        setCoverPhoto(null);
        setPdfFile(null);
        setSuccess(false);
        setCurrentStep(1);
        router.push(`/books/${result.book._id}`);
      }, 1500);
    } catch (err) {
      setError(err.message);
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Add a New Book</h1>
          <p className="text-lg text-gray-600">Fill in the details to add to your collection</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium
                  ${currentStep >= step ? 'bg-indigo-600' : 'bg-gray-300'}`}
              >
                {step}
              </div>
              <span className={`mt-2 text-sm font-medium ${currentStep >= step ? 'text-indigo-600' : 'text-gray-500'}`}>
                {step === 1 ? 'Book Details' : step === 2 ? 'Upload Files' : 'Review'}
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: currentStep === 1 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentStep === 3 ? 20 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200 flex items-start"
                >
                  <FiInfo className="mt-0.5 mr-2 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200 flex items-start"
                >
                  <FiInfo className="mt-0.5 mr-2 flex-shrink-0" />
                  <span>Book added successfully! Redirecting...</span>
                </motion.div>
              )}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {/* Step 1: Book Details */}
                {currentStep === 1 && (
                  <>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <FiType className="mr-2 text-indigo-500" />
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <FiUser className="mr-2 text-indigo-500" />
                        Author *
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <FiInfo className="mr-2 text-indigo-500" />
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={4}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <FiBook className="mr-2 text-indigo-500" />
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <FiCalendar className="mr-2 text-indigo-500" />
                        Published Date
                      </label>
                      <input
                        type="date"
                        name="publishedDate"
                        value={formData.publishedDate}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </motion.div>
                  </>
                )}

                {/* Step 2: File Uploads */}
                {currentStep === 2 && (
                  <>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <FiImage className="mr-2 text-indigo-500" />
                        Cover Photo *
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <div className="flex text-sm text-gray-600 justify-center">
                            <label
                              htmlFor="coverPhoto"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                            >
                              <span>Upload a file</span>
                              <input
                                id="coverPhoto"
                                name="coverPhoto"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                required
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                          {coverPhoto && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-2 text-sm text-gray-900 flex items-center justify-center"
                            >
                              <FiImage className="mr-2 text-indigo-500" />
                              {coverPhoto.name} ({Math.round(coverPhoto.size / 1024)} KB)
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                        <FiBook className="mr-2 text-indigo-500" />
                        PDF File *
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <div className="flex text-sm text-gray-600 justify-center">
                            <label
                              htmlFor="pdf"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                            >
                              <span>Upload a file</span>
                              <input
                                id="pdf"
                                name="pdf"
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                required
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF up to 10MB</p>
                          {pdfFile && (
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="mt-2 text-sm text-gray-900 flex items-center justify-center"
                            >
                              <FiBook className="mr-2 text-indigo-500" />
                              {pdfFile.name} ({Math.round(pdfFile.size / 1024)} KB)
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Step 3: Review */}
                {currentStep === 3 && (
                  <motion.div variants={containerVariants} className="space-y-6">
                    <motion.h3 variants={itemVariants} className="text-lg font-medium text-gray-900">Review Your Submission</motion.h3>
                    
                    <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-2">Book Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Title</p>
                          <p className="font-medium">{formData.title || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Author</p>
                          <p className="font-medium">{formData.author || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Category</p>
                          <p className="font-medium">{formData.category || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Published Date</p>
                          <p className="font-medium">{formData.publishedDate || 'Not provided'}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-sm text-gray-500">Description</p>
                          <p className="font-medium">{formData.description || 'Not provided'}</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-700 mb-2">Files</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Cover Photo</p>
                          <p className="font-medium">
                            {coverPhoto ? (
                              <span>{coverPhoto.name} ({Math.round(coverPhoto.size / 1024)} KB)</span>
                            ) : (
                              'Not provided'
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">PDF File</p>
                          <p className="font-medium">
                            {pdfFile ? (
                              <span>{pdfFile.name} ({Math.round(pdfFile.size / 1024)} KB)</span>
                            ) : (
                              'Not provided'
                            )}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>

              <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Previous
                  </motion.button>
                )}
                
                {currentStep < 3 ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`ml-auto px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Book'
                    )}
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AddBookForm;
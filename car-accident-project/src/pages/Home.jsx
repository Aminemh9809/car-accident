import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {
  // State for managing the active slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slides for the hero section slider
  const slides = [
    {
      title: "Report Incidents Anonymously, Help Keep Communities Safe",
      description: "Have you witnessed something unusual? Report it confidentially, share a photo, or write your story.",
      buttonText: "Report Now",
      buttonLink: "#report",
      bgColor: "bg-blue-800",
    },
    {
      title: "Your Story Matters: Make a Difference by Sharing",
      description: "Whether you experienced or witnessed an incident, your report can help make a safer community.",
      buttonText: "Share Your Story",
      buttonLink: "#share-story",
      bgColor: "bg-green-800",
    },
    {
      title: "Stay Anonymous and Secure",
      description: "Your privacy is our priority. Report without revealing your identity.",
      buttonText: "Learn More",
      buttonLink: "#learn-more",
      bgColor: "bg-purple-800",
    },
  ];

  // Slide transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <> 
      <Header />

      {/* Hero Slider Section */}
      <section className={`text-center mb-12 ${slides[currentSlide].bgColor} text-white py-12 px-6`}>
        <h2 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h2>
        <p className="text-xl mb-6">{slides[currentSlide].description}</p>
        <a href={slides[currentSlide].buttonLink} className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">
          {slides[currentSlide].buttonText}
        </a>
      </section>

      {/* Features Section */}
      <main className="container mx-auto mt-8 p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Incident Reporting */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Report an Incident</h3>
            <p className="mb-4 text-gray-600">
              Report a crime, an accident, or any suspicious activity. Stay anonymous or choose to share your details.
            </p>
            <a href="#report" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Report Incident
            </a>
          </div>

          {/* Photo Evidence */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Share Photo Evidence</h3>
            <p className="mb-4 text-gray-600">
              Capture any evidence, like license plates or unusual sightings. Your photo can help investigations.
            </p>
            <a href="#upload-photo" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Upload Photo
            </a>
          </div>

          {/* Anonymous Story Sharing */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Stay Anonymous</h3>
            <p className="mb-4 text-gray-600">
              Want to share your experience without being identified? We ensure complete confidentiality.
            </p>
            <a href="#share-story" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Share Your Story
            </a>
          </div>
        </section>


        {/* Recent Stories Section */}
        <section className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Recent Reports and Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Suspicious Activity Near Park</h3>
              <p className="text-gray-600 mb-4">Reported by Anonymous • 1 day ago</p>
              <p className="text-gray-700 mb-4">
                I noticed a person behaving oddly near the park entrance. They seemed to be observing parked cars...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read full story</a>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Attempted Car Break-In</h3>
              <p className="text-gray-600 mb-4">Reported by Sarah J. • 2 days ago</p>
              <p className="text-gray-700 mb-4">
                Someone tried to break into my car last night. I captured a photo of their car leaving...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read full story</a>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Roadside Assistance Scam</h3>
              <p className="text-gray-600 mb-4">Reported by John K. • 3 days ago</p>
              <p className="text-gray-700 mb-4">
                A man posing as roadside assistance tried to charge me for a flat tire repair I didn’t need...
              </p>
              <a href="#" className="text-blue-500 hover:underline">Read full story</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* Logo and Intro */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-semibold text-white">SafeReport</h4>
            <p className="text-gray-400">Connecting communities through secure, anonymous reporting.</p>
          </div>

          {/* Links Section */}
          <div className="mb-4 md:mb-0">
            <h5 className="text-white font-semibold mb-2">Quick Links</h5>
            <ul>
              <li><a href="#report" className="hover:underline">Report Incident</a></li>
              <li><a href="#share-story" className="hover:underline">Share a Story</a></li>
              <li><a href="#learn-more" className="hover:underline">Learn More</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-gray-400">
            <h5 className="text-white font-semibold mb-2">Get in Touch</h5>
            <p>Email: support@safereport.com</p>
            <p>Phone: (123) 456-7890</p>
            <p className="mt-4">Follow Us:</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-400 hover:text-blue-500">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-500">Twitter</a>
              <a href="#" className="text-blue-400 hover:text-blue-500">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} SafeReport. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;

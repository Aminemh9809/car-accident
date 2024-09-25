import React from 'react'
import Header from './Header'
const Home = () => {
  return (
    <> 
    <Header />
    <main className="container mx-auto mt-8 p-4">
    <section className="text-center mb-12">Justice Rouen

      <h2 className="text-4xl font-bold mb-4">Share Your Journey, Inspire Others</h2>
      <p className="text-xl mb-6">Connect with people through shared experiences. Your story matters.</p>
      <a href="#" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">Share Your Story Now</a>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Recent Stories</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">Overcoming adversity in college</li>
          <li className="mb-2">My journey to fitness and health</li>
          <li className="mb-2">Finding love after loss</li>
          <li className="mb-2">Career change at 40: My success story</li>
        </ul>
        <a href="#" className="text-blue-600 hover:underline">Read more stories</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Featured Photo Stories</h3>
        <div className="grid grid-cols-2 gap-2">
          <img src="/api/placeholder/150/150" alt="Placeholder" className="w-full h-auto rounded" />
          <img src="/api/placeholder/150/150" alt="Placeholder" className="w-full h-auto rounded" />
          <img src="/api/placeholder/150/150" alt="Placeholder" className="w-full h-auto rounded" />
          <img src="/api/placeholder/150/150" alt="Placeholder" className="w-full h-auto rounded" />
        </div>
        <a href="#" className="text-blue-600 hover:underline mt-4 block">See more photos</a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Why Share Your Story?</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">Connect with others who relate</li>
          <li className="mb-2">Inspire and be inspired</li>
          <li className="mb-2">Reflect on your journey</li>
          <li className="mb-2">Create a supportive community</li>
        </ul>
        <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block hover:bg-blue-600 transition duration-300">Learn More</a>
      </div>
    </section>
  </main>
  </>
  )
}

export default Home
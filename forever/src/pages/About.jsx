import React from 'react'
import { assets } from '../assets/assets'
import { Subscribe } from '../components/Subscribe'
function About() {
  return (
    <div className="bg-white">
  
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">ABOUT US ─────</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={assets.about_img} alt="Image of a woman wearing boots" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 ml-4">
            <p className="text-lg mb-4">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <p className="text-lg mb-4">Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
      </main>
      <table className="table-auto w-full mt-10">
  <tbody>
    <tr className="border-t">
      <td className="p-6 text-left">
        <h4 className="font-bold mb-2">Quality Assurance:</h4>
        <p className="text-sm text-gray-600">
          We meticulously select and vet each product to ensure it meets our stringent quality standards.
        </p>
      </td>
      <td className="p-6 text-left">
        <h4 className="font-bold mb-2">Convenience:</h4>
        <p className="text-sm text-gray-600">
          With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
        </p>
      </td>
      <td className="p-6 text-left">
        <h4 className="font-bold mb-2">Exceptional Customer Service:</h4>
        <p className="text-sm text-gray-600">
          Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
        </p>
      </td>
    </tr>
  </tbody>
</table>

      <Subscribe />
    </div>
  )
}

export default About

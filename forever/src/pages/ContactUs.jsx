import { assets } from '../assets/assets'
import { Subscribe } from '../components/Subscribe'

function ContactUs() {
  return (
    <div className="bg-white">
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">CONTACT US ─────</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={assets.contact_img} alt="Image of a laptop and coffee cup" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 ml-4">
            <h2 className="text-2xl font-bold mb-4">Our Store</h2>
            <p className="text-lg mb-2">54709 Willms Station</p>
            <p className="text-lg mb-2">Suite 350, Washington, USA</p>
            <p className="text-lg mb-2">Tel: (415) 555-0132</p>
            <p className="text-lg mb-2">Email: admin@forever.com</p>

            <h2 className="text-2xl font-bold mb-4">Careers at Forever</h2>
            <p className="text-lg">Learn more about our teams and job openings.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4">Explore Jobs</button>
          </div>
        </div>
      </main>
      <Subscribe />
    </div>
  )
}

export default ContactUs

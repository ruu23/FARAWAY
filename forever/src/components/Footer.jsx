const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg">FOREVER</h3>
            <p className="text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-4">
            <div>
              <h3 className="font-bold text-lg">Company</h3>
              <ul className="mt-2">
                <li><a href="#" className="text-sm hover:underline">Home</a></li>
                <li><a href="#" className="text-sm hover:underline">About Us</a></li>
                <li><a href="#" className="text-sm hover:underline">Delivery</a></li>
                <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Get in Touch</h3>
              <ul className="mt-2">
                <li><a href="tel:+1-000-000-0000" className="text-sm hover:underline">+1-000-000-0000</a></li>
                <li><a href="mailto:greatstackdev@gmail.com" className="text-sm hover:underline">greatstackdev@gmail.com</a></li>
                <li><a href="#" className="text-sm hover:underline">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; 2024 greatstack.dev. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
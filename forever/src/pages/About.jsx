import about from '../images/about_img.png'
function About() {
  return (
    <div className="bg-white">
  
      <main className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">ABOUT US</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={about} alt="Image of a woman wearing boots" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2 ml-4">
            <p className="text-lg mb-4">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <p className="text-lg mb-4">Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

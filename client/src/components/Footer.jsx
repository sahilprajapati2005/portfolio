const Footer = () => {
  return (
    <footer className="bg-white border-t py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Sahil Prajapati. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/sahilprajapati2005" target="_blank" className="text-gray-400 hover:text-black">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-blue-600">LinkedIn</a>
          <a href="mailto:sahilprajapati0108@gmail.com" className="text-gray-400 hover:text-red-500">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
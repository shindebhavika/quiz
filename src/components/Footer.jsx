function Footer() {
  return (
    <footer className="py-3 bg-light Footer w-full fixed   bg-zinc-600 h-32">
      <div className="container flex flex-col items-center justify-between h-full mx-auto">
        <ul className="flex justify-center border-bottom pb-3 mb-3">
          <li className="mr-4"><a href="#" className="text-white">Home</a></li>
          <li className="mr-4"><a href="#" className="text-black text-white">Features</a></li>
          <li className="mr-4"><a href="#" className="text-black text-white text-white">FAQs</a></li>
          <li><a href="#" className="text-black text-white">About</a></li>
        </ul>
        <p className="text-center text-black text-white animate-fade-in">© 2023 VISION, Inc</p>
      </div>
    </footer>
  );
}

export default Footer;

function Footer() {
  return (
    <footer className="py-3 bg-light Footer w-full fixed   bg-zinc-600 h-32">
      <div className="container flex flex-col items-center justify-between h-full mx-auto">
        <ul className="flex justify-center border-bottom pb-3 mb-3">
          <li className="mr-4"><a href="#" className="text-black">Home</a></li>
          <li className="mr-4"><a href="#" className="text-black">Features</a></li>
          <li className="mr-4"><a href="#" className="text-black">FAQs</a></li>
          <li><a href="#" className="text-black">About</a></li>
        </ul>
        <p className="text-center text-black animate-fade-in">© 2023 VISION, Inc</p>
      </div>
    </footer>
  );
}

export default Footer;

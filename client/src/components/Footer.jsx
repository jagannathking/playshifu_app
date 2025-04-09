import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EC2150] text-white font-sans">
      {/* Top Images Section */}
      <div className="flex flex-wrap justify-center gap-6 py-8">
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F2m-plus.webp&w=3840&q=75"
          alt="2M+"
          className="w-60 rounded-xl"
        />
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F35-plus-countries.webp&w=3840&q=75"
          alt="35+ Countries"
          className="w-60 rounded-xl"
        />
        <img
          src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F20-plus-educational-toys.webp&w=3840&q=75"
          alt="20+ Toys"
          className="w-60 rounded-xl"
        />
      </div>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center items-center gap-12 py-6 border-t border-white/20">
        <div className="text-center">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2Ffree-shipping.webp&w=3840&q=75"
            className="w-10 mx-auto"
            alt="Free Shipping"
          />
          <p className="mt-2 font-medium">Free Shipping</p>
        </div>
        <div className="text-center">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F30-day-return.webp&w=3840&q=75"
            className="w-10 mx-auto"
            alt="30 Days Return"
          />
          <p className="mt-2 font-medium">30 Days Return</p>
        </div>
        <div className="text-center">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F6-months-warranty.webp&w=3840&q=75"
            className="w-10 mx-auto"
            alt="6 Months Warranty"
          />
          <p className="mt-2 font-medium">6 Months Warranty</p>
        </div>
        <div className="text-center">
          <img
            src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2Fsecure-checkout.webp&w=3840&q=75"
            className="w-10 mx-auto"
            alt="Secure Checkout"
          />
          <p className="mt-2 font-medium">Secure Checkout</p>
        </div>
      </div>

      {/* WhatsApp + Columns */}
      <div className="grid md:grid-cols-4 gap-8 p-10 text-sm">
        {/* WhatsApp */}
        <div>
          <p className="mb-4">
            Get notified of new launches, product updates, contests, and more exciting news!
          </p>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition">
            Join our WhatsApp Community
          </button>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-yellow-300 font-bold text-lg mb-2">Shop</h4>
          <ul className="space-y-1">
            <li>Problem Solving Toys</li>
            <li>Stem Toys</li>
            <li>Social & Emotional Development Toys</li>
            <li>Birthday Gift Toys</li>
            <li>Super Saver Deals</li>
            <li>Best Seller Toys</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="text-yellow-300 font-bold text-lg mb-2">More</h4>
          <ul className="space-y-1">
            <li>Device Compatibility</li>
            <li>Free-E-Books</li>
            <li>Parent Hub</li>
            <li>Blogs</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-yellow-300 font-bold text-lg mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 border-t border-white/20 text-sm">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <span>© 2025 PlayShifu.com</span>
        </div>
        <div className="flex items-center gap-4">
          <img src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fapplepay.webp&w=3840&q=75" alt="Apple Pay" className="h-6" />
          <img src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fmastercard.webp&w=3840&q=75" alt="Mastercard" className="h-6" />
          <img src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fvisa.webp&w=3840&q=75" alt="Visa" className="h-6" />
          <img src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fgpay.webp&w=3840&q=75" alt="Google Pay" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

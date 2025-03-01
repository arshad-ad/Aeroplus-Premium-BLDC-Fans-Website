"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Aeroplus</h2>
          <p className="text-sm mt-2">
            Premium BLDC Fans for energy efficiency and superior performance.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="#home" className="hover:text-white">Home</Link></li>
            <li><Link href="#products" className="hover:text-white">Products</Link></li>
            <li><Link href="#about" className="hover:text-white">About Us</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/_aeroplus_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Aeroplus. All rights reserved.
      </div>
    </footer>
  );
}

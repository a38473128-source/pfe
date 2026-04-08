"use client";
export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 rounded-lg" id="contact">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border rounded px-4 py-2"/>
        <input type="email" placeholder="Email" className="border rounded px-4 py-2"/>
        <textarea placeholder="Message" className="border rounded px-4 py-2"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">Send Message</button>
      </form>
    </section>
  );
}
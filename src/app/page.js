import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
<html data-theme="lofi"></html>;

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <header>
        <title>Event Makers</title>
        <meta name="description" content="Event Makers Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      <Header />

      <main>
        <section id="hero" className="text-center my-18">
          <h1 className="text-5xl font-bold">
            Make Your Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">Unforgettable</span>
          </h1>
          <p className="mt-4 text-xl text-slate-500">From weddings to corporate events, we bring your vision to life.</p>
          <div className="mt-8 space-x-4">
            <button className="btn btn-primary">Book Your Event</button>
            <button className="btn btn-outline">See All</button>
          </div>
        </section>
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-md border border-gray-300 relative">
                  <img src="/images/enterprise.png" alt="Event 1" className="rounded-lg mb-4" />
                  <div className="bg-green-100 text-green-700 p-2 rounded-md text-center absolute top-0 right-0 mt-2 mr-2">Online</div>
                  <h3 className="text-lg font-semibold mb-2">Build Your Own Enterprise</h3>
                  <p className="text-gray-600 mb-2">Muhammad Fakhri Rizqullah</p>
                  <div className="flex justify-between items-center">
                      <span className="text-gray-600">23 May</span>
                      <span className="text-gray-600">09 AM</span>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-md border border-gray-300 relative">
                  <img src="/images/prompt.png" alt="Event 2" className="rounded-lg mb-4" />
                  <div className="bg-green-100 text-green-700 p-2 rounded-md text-center absolute top-0 right-0 mt-2 mr-2">Online</div>
                  <h3 className="text-lg font-semibold mb-2">Prompt Engineering</h3>
                  <p className="text-gray-600 mb-2">Muhammad Fakhri Rizqullah</p>
                  <div className="flex justify-between items-center">
                      <span className="text-gray-600">12 June</span>
                      <span className="text-gray-600">07 PM</span>
                  </div>
              </div>
              <div className="bg-white p-4 rounded-md border border-gray-300 relative">
                  <img src="/images/business.png" alt="Event 3" className="rounded-lg mb-4" />
                  <div className="bg-green-100 text-green-700 p-2 rounded-md text-center absolute top-0 right-0 mt-2 mr-2">Online</div>
                  <h3 className="text-lg font-semibold mb-2">Business Webinar</h3>
                  <p className="text-gray-600 mb-2">Muhammad Fakhri Rizqullah</p>
                  <div className="flex justify-between items-center">
                      <span className="text-gray-600">16 Dec</span>
                      <span className="text-gray-600">08 AM</span>
                  </div>
              </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

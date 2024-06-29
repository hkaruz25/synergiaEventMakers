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
        <section id="hero" className="text-center my-16">
          <h1 className="text-5xl font-bold">
            Make Your Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">Unforgettable</span>
          </h1>
          <p className="mt-4 text-xl text-slate-500">From weddings to corporate events, we bring your vision to life.</p>
          <div className="mt-8 space-x-4">
            <button className="btn btn-primary">Book Your Event</button>
            <button className="btn btn-outline">See All</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

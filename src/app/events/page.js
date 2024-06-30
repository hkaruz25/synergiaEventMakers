// import { EventCard } from "@/components/event-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { prisma } from "@/utils/prisma";
// import { JoinForm } from "./join-form";

export default async function Page({ params }) {
//   const event = await prisma.event.findFirst({
//     where: {
//       id: params.eventid,
//     },

//     include: {
//       author: true,
//       participants: true,
//     },
//   });

  return (
    <div className="m-auto min-h-screen max-w-6xl py-8">
      <section className="space-y-24">
        <Header />
        <h1 className="text-balance text-4xl font-semibold tracking-tighter">
          {/* {event.name} */}
          Businees Seminar: Build Your Own Enterprise
        </h1>
        <main className="container mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        <section className="md:col-span-2 bg-white p-6 p-6 rounded-md border border-gray-300">
            <h2 className="text-xl font-bold mb-4">
                Nama Event
            </h2>
            <p className="text-lg mb-2">
                Businees Seminar: Build Your Own Enterprise
            </p>
            <h3 className="text-lg font-semibold">
                Event Speaker
            </h3>
            <p className="mb-2">
                Juliana Silva
            </p>
            <h3 className="text-lg font-semibold">
                Date
            </h3>
            <p className="mb-2">
                Sunday - May 23rd, 2024
            </p>
            <h3 className="text-lg font-semibold">
                Time
            </h3>
            <p className="mb-2">
                09.00 AM (GMT)
            </p>
            <h3 className="text-lg font-semibold">
                Event Author
            </h3>
            <p className="mb-2">
                Muhammad Fakhri Rizqullah
            </p>
        </section>
        <aside>
            <div class="bg-green-100 text-green-700 p-2 rounded-md text-center mb-4">Online</div>
            <img src="/images/enterprise.png" alt="Event Banner" class="rounded-lg shadow-md mb-4" />
            <div class="bg-white p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold mb-2">Participants</h3>
                <ul class="list-disc list-inside">
                    <li>Budi Wijaya</li>
                    <li>James Harden</li>
                    <li>Dimas Ahsa</li>
                    <li>Muhammad Dawilah</li>
                </ul>
            </div>
        </aside>
        <section class="md:col-span-2 bg-white p-6 p-6 rounded-lg border border-gray-300">
            <h2 class="text-xl font-bold mb-4">Join This Event</h2>
            <p class="mb-4">Fill this form below!</p>
            <form>
                <div class="mb-4">
                    <label for="name" class="block text-gray-700">Name</label>
                    <input type="text" id="name" class="w-full p-2 rounded bg-gray-100 focus:bg-blue-100" placeholder="Your Name" />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" class="w-full p-2 rounded bg-gray-100 focus:bg-blue-100" placeholder="Your Email" />
                </div>
                <button type="submit" class="bg-black text-white px-4 py-2 rounded">RSVP Now</button>
            </form>
        </section>
        </main>
      </section>
      <Footer />
    </div>
  );
}

import Link from "next/link";


export default function Home() {
  return (
    <div 
    style={{backgroundImage: "url(./images/home-img.jpg)"}}
    className="bg-cover bg-center min-h-screen">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white">
          <h1 className="text-2xl font-bold">Akmal's Computer <br />repair shop </h1>
          <address>
            Kabul, AFG <br />
            Second street of Taymani
          </address>
          <p>
            Open Daily: 8:am to 9:pm
          </p>
          <Link href="tel:23456" className="hover:underline">12341234</Link>
        </div>
      </main>
    </div>
  );
}

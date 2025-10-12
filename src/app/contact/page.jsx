import Image from "next/image";
import Button from "@/components/button/button";

export const metadata = {
  title: "Laiba Khalid Contact Information",
  description: "This is full stack blog application",
};


const ContactClient = () => {
  return (
    <main className="flex flex-col items-center px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center">
        Let's Keep in Touch
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl">
        <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
          <Image
            src="/contact.png"
            alt="Contact illustration"
            fill
            className="object-contain animate-move"
          />
        </div>

        <form className="flex flex-col gap-5 w-full md:w-1/2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-4 bg-transparent border-2  text-lg font-semibold focus:outline-none focus:border-green-400 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-4 bg-transparent border-2  text-lg font-semibold focus:outline-none focus:border-green-400 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="p-4 bg-transparent border-2  text-lg font-semibold focus:outline-none focus:border-green-400 rounded-lg resize-none"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </main>
  );
};

export default ContactClient;

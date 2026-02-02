"use client";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import useNetworkStatus from "@/hooks/useNetworkStatus";

export default function Home() {
  const isOnline = useNetworkStatus();

  if (!isOnline) {
    return (
      <div
        className="max-w-sm w-full min-h-screen shadow-lg bg-gray-50/80 mx-auto
    text-gray-900 gap-4 flex flex-col overflow-x-hidden"
      >
        {/* HEADER */}
        <Header />
        <div className="py-12 " />
        <div className="w-full px-2 flex flex-col gap-6 flex-1 justify-center">
          <div className="text-center text-red-600 font-semibold">
            Vous etes actuellement hors ligne. Veuillez vérifier votre connexion
            internet.
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <main
      className="max-w-sm w-full min-h-screen shadow-lg bg-gray-50/80 mx-auto
    text-gray-900 gap-4 flex flex-col overflow-x-hidden"
    >
      {/* HEADER */}
      <Header />

      {/* SEPARATOR */}
      <div className="py-12" />

      {/* CONTENT */}
      <div className="w-full px-2 flex flex-col gap-6">
        {/* About Me section */}
        <AboutMe />

        {/* Project section */}
        <ProjectsSection />
      </div>

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

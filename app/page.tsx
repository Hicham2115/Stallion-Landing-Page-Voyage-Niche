import { CaseStudies } from "@/components/landing/case-studies";
import { Testimonials } from "@/components/landing/testimonials";
import { Background } from "@/components/landing/background";
import { Hero } from "@/components/landing/hero";
import { DevelopmentService } from "@/components/landing/development-service";
import { Process } from "@/components/landing/process";
import { Faq } from "@/components/landing/faq";
import { Closing } from "@/components/landing/closing";
import { Team } from "@/components/landing/team";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0a0c0d] text-[#f9faf9] selection:bg-[#bafc0c] selection:text-[#0a0c0d]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Création de sites web, CRM et applications pour agences de voyage",
        serviceType: "Développement web et logiciel sur mesure",
        description: "Sites web, CRM et applications pour présenter les circuits et gérer les dossiers voyageurs des agences de voyage au Maroc.",
        provider: { "@type": "Organization", name: "Stallion Advertising" },
        areaServed: { "@type": "Country", name: "Maroc" },
        audience: { "@type": "BusinessAudience", audienceType: "Agences de voyage" },
      }).replace(/</g, "\\u003c") }} />
      <Background />
      <Header />
      <main>
        <Hero />
        <div className="relative z-1 flex flex-col items-center gap-4 sm:flex-row sm:flex-nowrap border-y border-white/10 bg-white/[.025] px-5 py-6 text-xs font-bold text-[#bafc0c] sm:justify-center sm:gap-10 sm:text-base [&>span]:shrink-0"><span>Sites web de voyage</span><span>CRM & dossiers clients</span><span>Applications sur mesure</span></div>
        <DevelopmentService />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}

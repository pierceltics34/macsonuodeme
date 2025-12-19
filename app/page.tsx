"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import Link from "next/link";

// Metadata için ayrı dosya gerekebilir ama şimdilik client component olarak devam ediyoruz

export default function HomePage() {
  const openCrispChat = () => {
    if (typeof window !== "undefined" && window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    }
  };
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              MAÇ SONU ÖDEMELİ YASAL{" "}
              <span className="text-[#FF6B00]">NESİNE</span>,{" "}
              <span className="text-[#00A859]">BİLYONER</span>,{" "}
              <span className="text-[#FFC107]">İDDAA</span> KUPONU
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Şeffaf süreç, hızlı iletişim ve premium destek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/kuponlarimiz" variant="primary">
                Kuponlarımız
              </Button>
              <Button onClick={openCrispChat} variant="secondary">
                İletişim
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Güven Kartları */}
      <section className="py-12 md:py-16 bg-background-light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Güvenli İletişim */}
            <div className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft hover:shadow-card transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-[12px] flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Güvenli İletişim
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Güvenli ve şeffaf iletişim kanalları ile her zaman yanınızdayız.
              </p>
            </div>

            {/* Premium Destek */}
            <div className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft hover:shadow-card transition-shadow duration-200">
              <div className="w-12 h-12 bg-secondary/10 rounded-[12px] flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Premium Destek
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Profesyonel ekibimiz ile 7/24 premium destek hizmeti sunuyoruz.
              </p>
            </div>

            {/* Şeffaf Süreç */}
            <div className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft hover:shadow-card transition-shadow duration-200">
              <div className="w-12 h-12 bg-primary/10 rounded-[12px] flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Şeffaf Süreç
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Tüm süreçlerimiz şeffaf ve anlaşılır şekilde yönetilmektedir.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bölümler */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Hakkımızda */}
            <Link
              href="/hakkimizda"
              className="bg-background-card p-6 md:p-8 rounded-[16px] shadow-soft hover:shadow-card transition-all duration-200 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Hakkımızda
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Hizmetlerimiz ve misyonumuz hakkında daha fazla bilgi edinin.
              </p>
            </Link>

            {/* Referanslar */}
            <Link
              href="/referanslar"
              className="bg-background-card p-6 md:p-8 rounded-[16px] shadow-soft hover:shadow-card transition-all duration-200 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Referanslar
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Müşterilerimizin deneyimleri ve referanslarımızı inceleyin.
              </p>
            </Link>

            {/* Kuponlarımız */}
            <Link
              href="/kuponlarimiz"
              className="bg-background-card p-6 md:p-8 rounded-[16px] shadow-soft hover:shadow-card transition-all duration-200 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Kuponlarımız
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Kazandırmış olduğumuz örnek kuponları inceleyin ve başarı hikayelerimizi keşfedin.
              </p>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}


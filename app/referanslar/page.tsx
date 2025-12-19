import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Referanslar",
  description: "macsonuodeme.com referanslar ve müşteri deneyimleri.",
};

export default function ReferanslarPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Referanslar
          </h1>

          {/* Placeholder Section 1 */}
          <section className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Müşteri Yorumları
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Müşteri yorumları buraya eklenecek.</p>
            </div>
          </section>

          {/* Placeholder Section 2 */}
          <section className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Başarı Hikayeleri
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Başarı hikayeleri buraya eklenecek.</p>
            </div>
          </section>

          {/* Placeholder Section 3 */}
          <section className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              İstatistikler
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>İstatistikler buraya eklenecek.</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}


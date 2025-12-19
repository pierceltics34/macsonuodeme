import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Kuponlarımız",
  description: "macsonuodeme.com kuponlarımız sayfası. Maç sonu ödemeli yasal kuponlar.",
};

export default function KuponlarimizPage() {
  return (
    <div className="py-12 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Kuponlarımız
          </h1>

          {/* Placeholder Section 1 */}
          <section className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Kupon Kategorileri
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Kupon kategorileri buraya eklenecek.</p>
            </div>
          </section>

          {/* Placeholder Section 2 */}
          <section className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Kupon süreci hakkında bilgiler buraya eklenecek.</p>
            </div>
          </section>

          {/* Placeholder Section 3 */}
          <section className="bg-white p-6 md:p-8 rounded-[16px] shadow-soft">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>Sık sorulan sorular buraya eklenecek.</p>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}


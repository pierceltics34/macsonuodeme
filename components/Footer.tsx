import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-gray-100 mt-20">
      <Container>
        <div className="py-8 md:py-12">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">© {new Date().getFullYear()} macsonuodeme.com</p>
            <p className="text-gray-500">
              Tüm hakları saklıdır. Yasal kupon hizmeti.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}


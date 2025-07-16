import QuotationCard from "../components/QuotationCard";
import { quotationMock } from "../data/quotationMock";

export default function QuotationPage() {
  return (
    <main className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {quotationMock.map((item) => (
        <QuotationCard
          carName={item.carName}
          year={item.year}
          price={item.price}
        />
      ))}
    </main>
  );
}

import SummaryTable from "../components/SummaryTable";
import { completedData } from "../data/completedData";

export default function QuotationPage() {
  return (
    <main className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {completedData.map((item) => (
        <SummaryTable user={item.user} car={item.car} date={item.date} />
      ))}
    </main>
  );
}

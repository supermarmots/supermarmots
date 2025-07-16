import { cars } from "../data/initialFormData";
import ScrapForm from "../components/ScrapForm";

export default function ApplyScrapPage() {
  return (
    <main className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map((item) => (
        <ScrapForm key={item.id} name={item.name} carNum={item.carNum} />
      ))}
    </main>
  );
}

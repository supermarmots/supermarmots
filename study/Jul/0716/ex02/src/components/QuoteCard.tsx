type Props = { text: string };

export default function QuoteCard({ text }: Props) {
  return (
    <blockquote className="p-4 italic border-green-400 border-1-4 bg-green-50 text-grayy-800">
      {text}
    </blockquote>
  );
}

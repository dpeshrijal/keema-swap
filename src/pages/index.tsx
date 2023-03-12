import Header from "@/components/Header";
import Container from "@/components/Container";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-pink-50">
      <Header />
      <div className="flex items-center justify-center mt-28">
        <Container />
      </div>
    </div>
  );
}

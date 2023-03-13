import Header from "@/components/Header";
import Container from "@/components/Container";
import { useState } from "react";

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState("");
  const handleAccountSelect = async (value: string) => {
    setCurrentAccount(value);
  };
  return (
    <div className="flex flex-col h-screen bg-pink-50">
      <Header onAccountSelect={handleAccountSelect} />
      <div className="flex items-center justify-center mt-28">
        <Container account={currentAccount} />
      </div>
    </div>
  );
}

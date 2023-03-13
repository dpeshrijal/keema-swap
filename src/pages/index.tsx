import Header from "@/components/Header";
import Container from "@/components/Container";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();
  const handleAccountSelect = async (value: string) => {
    setCurrentAccount(value);
  };
  useEffect(() => {
    if (isMobile) {
      router.push("/mobile/");
    }
  });
  return (
    <div className="flex flex-col h-screen bg-pink-50">
      <Header onAccountSelect={handleAccountSelect} />
      <div className="flex items-center justify-center mt-28">
        <Container account={currentAccount} />
      </div>
    </div>
  );
}

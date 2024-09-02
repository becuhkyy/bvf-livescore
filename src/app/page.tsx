import Navbar from "@/app/components/Navbar";
import Scoreboard from "./components/scoreboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Scoreboard />
    </main>
  );
}

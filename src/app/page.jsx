import Account from "@/components/Account";
import CallToAction from "@/components/CallToAction";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Account />
      <CallToAction />
      <Reviews />
    </main>
  );
}

import { UserCategories } from "@/components/BodyList";
import { Footer, Header } from "@/components/Header";



export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Header/>
      <UserCategories />
      <Footer/>
    </div>
  );
}

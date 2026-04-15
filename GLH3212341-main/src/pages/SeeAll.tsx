import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

/* ---------------- COMPONENT ---------------- */

const SeeAll = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header isLoggedIn={false} onLogout={() => {}} />

      <div className="flex flex-1">
        <Sidebar isLoggedIn={false} />
        <main className="flex-1 p-4 md:p-6" />
      </div>

      <Footer />
    </div>
  );
};

export default SeeAll;
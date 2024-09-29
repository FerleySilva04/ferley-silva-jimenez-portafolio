import MainContent from "@/components/organism/MainContent";
import SideBar from "@/components/organism/Sidebar";
import SocialSideBar from "@/components/organism/SocialSidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="font-sans w-screen h-screen bg-white flex"> {/* Fondo blanco y fuente sans */}
      <Head>
        <title>Portafolio | Ferley Silva</title>
      </Head>
      {/* Barra izquierda */}
      <SideBar />
      {/* Sección central */}
      <MainContent />
      {/* Barra derecha */}
      <SocialSideBar />
    </div>
  );
}



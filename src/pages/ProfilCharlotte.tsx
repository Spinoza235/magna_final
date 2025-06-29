import React, { useState } from "react";
import "../assets/css/style.css";

const ProfilCharlotte: React.FC = () => {
  const [activeTab, setActiveTab] = useState("LE CALENDRIER");

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  const getTabClass = (label: string) => {
    return label === activeTab
      ? "px-4 py-1 bg-[#b8a898] text-white border border-amber-900 rounded-md text-sm"
      : "px-4 py-1 border border-amber-900 text-[#864e00] rounded-md text-sm";
  };

  const handleButtonAction = (action: string) => {
    switch (action) {
      case "annuler":
        if (confirm("Êtes-vous sûr de vouloir annuler les paiements ?")) {
          alert("Annulation des paiements en cours...");
        }
        break;
      case "tangu":
        alert("Redirection vers la messagerie TA-NGU...");
        break;
      case "admin":
        alert("Redirection vers le support administrateur...");
        break;
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans overflow-y-auto relative p-3">
      {/* ✅ Fond montagne */}
      <div
        className="absolute inset-x-0 bottom-0 mx-auto w-full sm:w-4/5 md:w-3/5 h-full max-h-[600px] opacity-70 z-0"
        style={{
          background: "linear-gradient(to top, #8fbc8f 0%, #bef0be 40%, #b6f5c1 100%)",
          clipPath:
            "polygon(0% 100%, 8% 85%, 15% 75%, 22% 65%, 30% 55%, 38% 50%, 45% 45%, 52% 42%, 58% 45%, 65% 50%, 72% 55%, 78% 65%, 85% 75%, 92% 85%, 100% 100%)",
          height: "35vh",
          minHeight: "250px",
        }}
      ></div>

      {/* ✅ Barre du haut */}
      <div className="flex justify-between items-center p-3 sm:p-4 relative z-10">
        <div className="text-lg sm:text-xl font-bold text-gray-800">9.41</div>
        <div className="flex space-x-1 sm:space-x-2 border-2 border-green-500 rounded-lg p-1 sm:p-2">
          <a href="#" className="text-gray-600 text-base">
            <i className="fas fa-envelope"></i>
          </a>
          <div className="h-6 w-px bg-green-500"></div>
          <a href="#" className="text-white bg-green-500 rounded-full p-1 text-base">
            <i className="fas fa-user"></i>
          </a>
          <div className="h-6 w-px bg-green-500"></div>
          <a href="#" className="text-gray-600 text-base">
            <i className="fas fa-home"></i>
          </a>
          <div className="h-6 w-px bg-green-500"></div>
          <a href="#" className="text-gray-600 text-base">
            <i className="fas fa-bars"></i>
          </a>
        </div>
      </div>

      {/* ✅ Profil */}
      <div className="relative z-10 text-center mt-3 w-full sm:w-4/5 md:w-3/5 mx-auto">
        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl">
          <i className="fas fa-user"></i>
        </div>
        <h1 className="mt-3 text-xl font-semibold text-[#864e00]">
          CHARLOTTE <span className="font-extrabold">NGONO</span>
        </h1>
        <p className="text-sm italic text-[#864e00]">inscrite depuis 25 12 2024</p>
      </div>

      {/* ✅ Onglets */}
      <div className="relative z-10 flex justify-center space-x-2 mt-4 w-full sm:w-4/5 md:w-3/5 mx-auto">
        {["VOTRE TA-NGU", "VOTRE CONTRAT", "LE CALENDRIER"].map((label) => (
          <button key={label} onClick={() => handleTabClick(label)} className={getTabClass(label)}>
            {label}
          </button>
        ))}
      </div>

      {/* ✅ Légende des événements + calendrier */}
      <div className="relative z-10 mt-4 w-full sm:w-4/5 md:w-3/5 mx-auto">
        <div className="border border-[#c9a67b] rounded-md p-6">
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span className="text-[#472f00] font-medium">Evenements FONDATION KA</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-[#472f00] font-medium">RDV TA-NGU</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-700 rounded-full"></div>
              <span className="text-[#472f00] font-medium">RDV ADMIN</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-center text-[#472f00] font-bold text-lg tracking-wider mb-4">SEPTEMBER</h3>
            <div className="grid grid-cols-7 text-center text-sm font-semibold text-[#472f00] mb-1">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-[#472f00] text-sm font-medium">
              {[...Array(22)].map((_, i) => <div key={i}>{i + 1}</div>)}
              <div className="bg-red-600 text-white font-bold rounded-full w-7 h-7 mx-auto flex items-center justify-center">23</div>
              {[...Array(8)].map((_, i) => <div key={i}>{24 + i}</div>)}
              {[...Array(4)].map((_, i) => <div key={`e-${i}`}></div>)}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Boutons d'action */}
      <footer className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pb-10 text-center w-full sm:w-4/5 md:w-3/5 mx-auto">
        <button onClick={() => handleButtonAction("annuler")} className="border-2 border-red-500 text-red-600 font-bold py-2 rounded-full text-sm">ANNULER LES PAIEMENTS</button>
        <button onClick={() => handleButtonAction("tangu")} className="border border-amber-900 text-[#864e00] py-2 rounded-full text-sm">CONTACTER VOTRE TA-NGU</button>
        <button onClick={() => handleButtonAction("admin")} className="border border-amber-900 text-[#864e00] py-2 rounded-full text-sm">CONTACT ADMINISTRATEUR</button>
      </footer>
    </div>
  );
};

export default ProfilCharlotte;

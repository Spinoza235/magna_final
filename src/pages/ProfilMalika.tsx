import React from "react";

const ProfilMalika: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans overflow-y-auto relative p-3">
      {/* ✅ Fond colline */}
      <div
        className="absolute inset-x-0 bottom-0 mx-auto w-full sm:w-4/5 md:w-3/5 h-full max-h-[650px] opacity-70 z-0"
        style={{
          background:
            "linear-gradient(to top, #8fbc8f 0%, #c4ebc4 40%, #d4f5d5 100%)",
          clipPath:
            "polygon(0% 100%, 8% 85%, 15% 75%, 22% 65%, 30% 55%, 38% 50%, 45% 45%, 52% 42%, 58% 45%, 65% 50%, 72% 55%, 78% 65%, 85% 75%, 92% 85%, 100% 100%)",
          height: "35vh",
          minHeight: "250px",
        }}
      ></div>

      {/* ✅ Barre du haut */}
      <header className="flex justify-between items-center p-3 sm:p-4 relative z-10">
        <span className="text-lg sm:text-xl font-bold text-gray-800">9.41</span>

        <nav className="flex space-x-1 sm:space-x-2 border-2 border-green-500 rounded-lg p-1 sm:p-2">
          <a href="#" className="text-gray-600 text-base">
            <i className="fas fa-envelope"></i>
          </a>
          <div className="h-6 w-px bg-green-500"></div>
          <a
            href="#"
            className="text-white bg-green-500 rounded-full p-1 text-base"
          >
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
        </nav>
      </header>

      {/* ✅ Profil */}
      <section className="relative z-10 text-center mt-3 w-full sm:w-4/5 md:w-3/5 mx-auto">
        <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl">
          <i className="fas fa-user"></i>
        </div>
        <h1 className="mt-3 text-xl font-semibold text-[#864e00]">
          MALIKA <span className="font-extrabold">BAMADANU</span>
        </h1>
        <p className="text-sm italic text-[#864e00] uppercase tracking-wide">
          Admin
        </p>
      </section>

      {/* ✅ Onglets */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 mt-4 w-full sm:w-4/5 md:w-3/5 mx-auto">
        <button className="px-4 py-1 bg-[#0160df] text-white rounded-md text-[13px] font-semibold shadow">
          MA‑NGU <br className="hidden sm:block" />
          <span className="text-[11px] font-normal">
            (Entreprises ou Institutions)
          </span>
        </button>

        <button className="px-4 py-1 bg-[#0bb046] text-white rounded-md text-[13px] font-semibold shadow">
          MA‑NGU <br className="hidden sm:block" />
          <span className="text-[11px] font-normal">(Particuliers)</span>
        </button>

        <button className="px-4 py-1 bg-[#f8cf10] text-[#864e00] rounded-md text-[13px] font-semibold shadow">
          TA‑NGU
        </button>

        <button className="px-4 py-1 bg-[#b8a898] text-white rounded-md text-[13px] font-semibold shadow">
          LE CALENDRIER
        </button>
      </div>

      {/* ✅ Calendrier + événements */}
      <div className="relative z-10 mt-4 w-full sm:w-4/5 md:w-3/5 mx-auto">
        <div className="border border-[#c9a67b] rounded-md p-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {/* Évènements */}
            <aside className="space-y-3 sm:col-span-1">
              <h4 className="font-semibold text-lg text-[#472f00] leading-tight">
                Évènements
              </h4>

              <div className="flex items-center space-x-3">
                <span className="w-6 h-6 bg-red-600 rounded-full"></span>
                <span className="text-[#472f00] font-medium">IA EN MARCHE</span>
              </div>

              <button className="w-full border border-[#564400] text-[#472f00] rounded-md py-2 text-sm hover:bg-[#f7f3eb] transition">
                Ajouter Évènement
              </button>
              <button className="w-full border border-[#564400] text-[#472f00] rounded-md py-2 text-sm hover:bg-[#f7f3eb] transition">
                Ajouter Pièce Jointe
              </button>
            </aside>

            {/* Calendrier */}
            <section className="sm:col-span-2">
              <h3 className="text-center text-[#472f00] font-bold text-lg tracking-wider mb-4">
                SEPTEMBER
              </h3>

              <div className="grid grid-cols-7 text-center text-sm font-semibold text-[#472f00] mb-1">
                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-[#472f00] text-sm font-medium">
                {[...Array(22)].map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
                <div className="bg-red-600 text-white font-bold rounded-full w-8 h-8 mx-auto flex items-center justify-center">
                  23
                </div>
                {[...Array(8)].map((_, i) => (
                  <div key={i}>{24 + i}</div>
                ))}
                {[...Array(4)].map((_, i) => (
                  <div key={`empty-${i}`}></div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ✅ Statistiques */}
      <div className="relative z-10 mt-5 text-center w-full sm:w-4/5 md:w-3/5 mx-auto">
        <p className="font-bold tracking-wide text-[#472f00] space-x-4 text-sm sm:text-base">
          <span>
            NOMBRE MA‑NGU : <span className="text-[#0bb046]">15</span>
          </span>
          <span>
            NOMBRE TA‑NGU : <span className="text-[#f8cf10]">8</span>
          </span>
          <span>
            TOTAL MENSUALITÉ : <span className="text-red-600">13,05 €</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfilMalika;

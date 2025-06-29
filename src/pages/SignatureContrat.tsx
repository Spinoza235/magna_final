import { useState } from 'react';

const SignatureContrat = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-sans">
      {/* Fond montagne */}
      <div
        className="mountain-bg absolute top-0 left-1/2 transform -translate-x-1/2 w-full sm:w-4/5 md:w-3/5 h-full min-h-screen opacity-70 z-0"
        style={{
          background: 'linear-gradient(to top, #8fbc8f 0%, #bef0be 40%, #b6f5c1 100%)',
          clipPath: `polygon(
            0% 100%, 8% 85%, 15% 75%, 22% 65%, 30% 55%,
            38% 50%, 45% 45%, 52% 42%, 58% 45%, 65% 50%,
            72% 55%, 78% 65%, 85% 75%, 92% 85%, 100% 100%
          )`,
        }}
      ></div>

      {/* Barre du haut */}
      <div className="flex justify-between items-center p-3 mt-5 relative z-10">
        <div className="text-sm font-bold text-gray-800">9.41</div>
        <div className="flex items-center space-x-2 border-2 border-green-500 rounded-lg px-2 py-1">
          <i className="fas fa-envelope text-gray-600 text-sm"></i>
          <div className="h-5 w-px bg-green-500"></div>
          <i className="fas fa-user text-white bg-green-500 rounded-full p-1 text-sm"></i>
          <div className="h-5 w-px bg-green-500"></div>
          <i className="fas fa-home text-gray-600 text-sm"></i>
          <div className="h-5 w-px bg-green-500"></div>
          <i className="fas fa-bars text-gray-600 text-sm"></i>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center mt-2 relative z-10">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white overflow-hidden">
          <img src="../assets/images/bg-montagne.png" alt="Logo MaNga" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Barre de progression */}
      <div className="flex justify-center mt-2 relative z-10">
        <div className="w-4/5 sm:w-2/5 bg-gray-300 rounded-full h-3">
          <div className="bg-green-500 h-3 rounded-full" style={{ width: '95%' }}></div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="text-center px-4 mt-6 relative z-10 max-w-xl mx-auto pb-32">
        <h2 className="text-purple-700 font-bold text-sm sm:text-base uppercase">Engagement Identité et Moyen de Paiement</h2>
        <p className="text-[#210C4A] font-bold text-xl sm:text-2xl mt-2 mb-6">
          Signature électronique du contrat d'affiliation
        </p>

        {/* Bouton téléchargement */}
        <div className="mb-6">
          <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-8 rounded-lg font-semibold text-sm">
            TELECHARGE ICI
          </button>
        </div>

        {/* Choix validation */}
        <div id="signature-group" className="flex flex-col sm:flex-row justify-center gap-4 mb-6 w-full">
          {['Oui, je certifie avoir lu et signé le contrat d\'affiliation MA-NGA', 'Non, je préfère réfléchir'].map((text, index) => (
            <button
              key={index}
              onClick={() => setSelected(text)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold w-full sm:w-auto sm:flex-1 max-w-[300px] mx-auto ${
                selected === text ? 'bg-violet-600' : 'bg-violet-300 hover:bg-violet-400'
              } text-white`}
            >
              {text}
            </button>
          ))}
        </div>

        {/* Indicateur étapes */}
        <div className="flex justify-center space-x-2 my-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-4 h-4 bg-violet-600 rounded-full"></div>
          ))}
          <div className="w-4 h-4 bg-violet-300 rounded-full"></div>
        </div>

        {/* Bouton suivant */}
        <div className="flex justify-center items-center space-x-4 mt-4 mb-8">
          <i className="fas fa-angle-left text-4xl text-amber-800 cursor-pointer hover:text-amber-900"></i>
          <button className="w-[70%] sm:w-[60%] bg-violet-700 hover:bg-violet-800 text-white font-bold py-3 text-base rounded-full shadow-lg">
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignatureContrat;

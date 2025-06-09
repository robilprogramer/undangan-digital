import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const PregnancyInvitation = () => {
  const router = useRouter();
  const [coupleNames, setCoupleNames] = useState({
    husband: "Robil",
    wife: "Ila",
  });
  const [eventDate, setEventDate] = useState("Kamis, 12 Juni 2025");
  const [kepada, setKepada] = useState("Bapak/Ibu/Saudara/i");

  useEffect(() => {
    // Ambil parameter dari query string
    const { husband, wife, date, kepada } = router.query;

    if (husband || wife || date || kepada) {
      setCoupleNames({
        husband: husband ? husband.toString().toUpperCase() : "Robil",
        wife: wife ? wife.toString().toUpperCase() : "Ila",
      });

      if (date) {
        setEventDate(date.toString());
      }

      if (kepada) {
        setKepada(kepada.toString());
      }
    }
  }, [router.query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 p-4">
      {/* URL Example: /undangan?husband=Ahmad&wife=Siti&date=Sabtu, 15 Desember 2024 */}

      {/* Invitation Card */}
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-orange-100 via-pink-50 to-blue-100 rounded-3xl shadow-2xl overflow-hidden relative">
        {/* Decorative Flowers - Top Left */}
        <div className="absolute top-4 left-4 w-16 h-16 opacity-60">
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400">
            <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.7" />
            <circle cx="35" cy="15" r="6" fill="currentColor" opacity="0.8" />
            <circle cx="25" cy="35" r="7" fill="currentColor" opacity="0.6" />
            <path
              d="M15 25 Q25 15, 35 25 Q25 35, 15 25"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Decorative Flowers - Top Right */}
        <div className="absolute top-4 right-4 w-20 h-20 opacity-60">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-400">
            <circle cx="70" cy="25" r="10" fill="currentColor" opacity="0.6" />
            <circle cx="85" cy="20" r="7" fill="currentColor" opacity="0.7" />
            <circle cx="75" cy="40" r="8" fill="currentColor" opacity="0.5" />
            <path
              d="M65 30 Q75 20, 85 30 Q75 40, 65 30"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Decorative Flowers - Bottom Left */}
        <div className="absolute bottom-4 left-4 w-18 h-18 opacity-60">
          <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
            <circle cx="25" cy="75" r="9" fill="currentColor" opacity="0.6" />
            <circle cx="40" cy="70" r="6" fill="currentColor" opacity="0.7" />
            <circle cx="30" cy="85" r="7" fill="currentColor" opacity="0.5" />
            <path
              d="M20 80 Q30 70, 40 80 Q30 90, 20 80"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Decorative Flowers - Bottom Right */}
        <div className="absolute bottom-4 right-4 w-16 h-16 opacity-60">
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-400">
            <circle cx="75" cy="80" r="8" fill="currentColor" opacity="0.7" />
            <circle cx="85" cy="75" r="6" fill="currentColor" opacity="0.6" />
            <circle cx="80" cy="90" r="7" fill="currentColor" opacity="0.5" />
            <path
              d="M70 85 Q80 75, 90 85 Q80 95, 70 85"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="px-8 py-12 text-center relative z-10">
          {/* Bismillah */}
          <div className="mb-8">
            <p
              className="text-2xl font-arabic text-orange-800"
              style={{ fontFamily: "serif" }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tasyakuran 7 Bulan Kehamilan
          </h1>

          {/* Date */}
          <p className="text-lg text-gray-600 mb-8">{eventDate}</p>

          {/* Assalamualaikum */}
          <div className="mb-4">
            <h2
              className="text-2xl font-script text-orange-700 mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Assalamu'alaikum Wr. Wb
            </h2>
            <p className="text-gray-700 leading-relaxed px-4">
              Mohon Do'a {kepada}
              <br />
              Semoga Allah SWT memberikan kesehatan &<br />
              keselamatan bayi yang dikandung & ibunya dimudahkan
              <br />
              dalam persalinannya, serta kelak tumbuh menjadi anak
              <br />
              yang sholeh/sholehah
            </p>
            <p className="text-gray-600 mt-4 italic">
              Aamiin Ya Robbal 'Alamiin...
            </p>
          </div>

          {/* Couple Illustration */}
          <div className="flex justify-center mb-1">
            <div className="relative">
              {/* Couple Silhouette */}
              <div className="flex items-center justify-center space-x-4">
                {/* Husband */}

                <img
                  src="/images/png.png"
                  alt="Muslim Couple Illustration"
                  className="w-32 h-40 object-contain"
                />
                {/* Wife */}
              </div>
            </div>
          </div>

          {/* Wassalamualaikum */}
          <div className="mb-6">
            <h2
              className="text-2xl font-script text-orange-700 mb-4"
              style={{ fontFamily: "cursive" }}
            >
              Wassalamu'alaikum Wr. Wb
            </h2>
          </div>

          {/* Couple Names */}
          <div className="bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-700 mb-2">Kami Yang Berbahagia :</p>
            <h3 className="text-3xl font-bold text-gray-800">
              {coupleNames.husband} & {coupleNames.wife}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyInvitation;

"use client";

import { useState } from "react";

export default function Cookies() {
  const [acceptedCookies, setAcceptedCookies] = useState<boolean>(false);

  const handleAccept = () => {
    setAcceptedCookies(true);
    // Ici, vous pouvez définir les cookies ou faire d'autres actions lorsque l'utilisateur accepte les cookies
  };

  const handleReject = () => {
    setAcceptedCookies(true);
    // Ici, vous pouvez supprimer les cookies ou faire d'autres actions lorsque l'utilisateur refuse les cookies
  };

  if (acceptedCookies) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 backdrop-blur-md transition-[background,color] duration-500 ease-expo-out bg-black/50 text-white p-4 fixed bottom-0 left-0">
      <div>
        <p className="font-favorit-mono text-sm uppercase">
          Nous utilisons des cookies pour améliorer votre expérience.
        </p>
        <p className="font-favorit-mono text-sm uppercase">
          En continuant votre navigation, vous acceptez l&apos;utilisation de
          cookies.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="font-favorit-mono text-sm uppercase 

          "
          onClick={handleAccept}
        >
          [Accepter]
        </button>
        <button
          className="font-favorit-mono text-sm uppercase"
          onClick={handleReject}
        >
          [Refuser]
        </button>
      </div>
    </div>
  );
}

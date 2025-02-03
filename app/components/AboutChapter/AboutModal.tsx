import React from "react";

interface PricingModal {
  closeModal: () => void;
}

export const AboutModal: React.FC<PricingModal> = ({ closeModal }) => (
  <section
    className={
      "fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
    }
    onClick={closeModal}
  >
    <div
      className={
        "bg-black p-6 rounded-lg shadow-lg max-w-4xl w-full flex items-center flex-col gap-10 overflow-y-auto max-h-[90vh]"
      }
      onClick={(e) => e.stopPropagation()}
    >
      <span className={"text-2xl lg:text-3xl text-white font-bold"}>
        O mnie:
      </span>
      <span className={"text-lg lg:text-xl text-white"}>
        Trener przygotowania motorycznego i terapii ruchowej z ponad 10-letnim
        doświadczeniem oraz absolwent Akademii Wychowania Fizycznego we
        Wrocławiu. Specjalizuję się w kompleksowym podejściu do rozwoju
        fizycznego, łącząc trening motoryczny z terapią ruchową. Współpracuję z
        zespołem wyspecjalizowanych terapeutów, co pozwala nam wspólnie planować
        i realizować spersonalizowane cykle terapeutyczno-ruchowe. Dzięki temu
        mogę skutecznie wspierać moich podopiecznych w osiąganiu ich celów
        zdrowotnych i sportowych.
      </span>
      <button
        onClick={closeModal}
        className={"bg-zp-orange-500 text-white font-bold p-2 w-40"}
      >
        Zamknij
      </button>
    </div>
  </section>
);

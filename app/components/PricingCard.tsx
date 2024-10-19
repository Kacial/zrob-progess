import React from "react";

type PricingType = "massage" | "training" | "onlineTraining";

interface PricingPros {
  type: PricingType;
}

type TrainingService = {
  name: string;
  price: number;
};

interface Service {
  type?: PricingType;
  name: string;
  serviceDetails?: string;
  pricing: number | TrainingService[];
  desc?: string;
  button?: string;
}

const services: Service[] = [
  {
    type: "training",
    name: "Trening",
    pricing: [
      { name: "Jeden trening personalny", price: 110 },
      { name: "10 treningów", price: 1000 },
      {
        name: "Plan żywieniowy, suplementacja, odczyt wyników badań krwi przez specjalistę",
        price: 150,
      },
      { name: "Plan Treningowy", price: 150 },
      { name: "Kinesiology Taping", price: 40 },
    ],
    button: "SPRAWDŹ REKOMENDACJE",
  },
  {
    type: "massage",
    name: "Masaż",
    serviceDetails: "Masaż (opcja z dojazdem do domu)",
    pricing: 100,
    desc: "Koncepcje którą stosuje podczas masażu opiera się na terapii punktów spustowych oraz stosowaniu technik tkanek miękkich oraz prace narzędziami IASTM",
    button: "POZNAJ TECHNIKI MASAŻU",
  },
  {
    type: "onlineTraining",
    name: "Prowadzenie online",
    serviceDetails: "Abonament miesięczny",
    pricing: 499,
    desc: "Plan treningowy, indywidualna dieta rozpisana przez eksperta d.s żywienia (możliwość konsultacji online), nauka planu treningowego",
    button: "ZAPYTAJ O SZCZEGÓŁY",
  },
];
const TrainingCard: React.FC<Service> = ({ name, pricing, button }) => (
  <div className="px-10 py-14 flex flex-col gap-8 items-center shadow-custom">
    <span className="text-3xl font-bold text-white">{name}</span>
    {Array.isArray(pricing) &&
      pricing.map(({ name, price }, index) => (
        <div key={index} className="flex justify-between w-full">
          <span className="text-xl text-white text-left">{name}</span>
          <span className="text-xl text-zp-orange-500 font-bold text-right">
            {price} zł
          </span>
        </div>
      ))}
    <button className="bg-white text-base font-bold text-zp-orange-500 px-14 py-2">
      {button}
    </button>
  </div>
);

// Reusable component for non-training service cards
const ServiceCard: React.FC<Service> = ({
  type,
  name,
  desc,
  serviceDetails,
  pricing,
  button,
}) => (
  <div className="px-10 py-14 flex flex-col gap-8 items-center justify-between">
    <span className="text-3xl font-bold text-white">{name}</span>
    {desc && <span className="text-xl text-white">{desc}</span>}
    <div className="flex justify-between w-full">
      <span className="text-xl text-white text-left">{serviceDetails}</span>
      <span className="text-xl text-zp-orange-500 font-bold text-right">
        {typeof pricing === "number" && `${pricing} zł`}
      </span>
    </div>
    {button && (
      <button
        className={`${type === "massage" ? "bg-zp-orange-500 text-white" : "bg-white text-zp-orange-500"} text-base font-bold px-14 py-2`}
      >
        {button}
      </button>
    )}
  </div>
);

export const PricingCard: React.FC<PricingPros> = ({ type }) => {
  const filteredService = services.find((service) => service.type === type);

  return (
    <div className="w-[493px] h-[591px] bg-black shadow-custom">
      {type === "training" && filteredService ? (
        <TrainingCard
          name={filteredService.name}
          pricing={filteredService.pricing}
          button={filteredService.button}
        />
      ) : (
        filteredService && (
          <ServiceCard
            type={filteredService.type}
            name={filteredService.name}
            desc={filteredService.desc}
            serviceDetails={filteredService.serviceDetails}
            pricing={filteredService.pricing}
            button={filteredService.button}
          />
        )
      )}
    </div>
  );
};

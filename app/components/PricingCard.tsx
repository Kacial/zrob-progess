"use client";

import React from "react";
import { usePricingModal } from "@/app/components/Pricing Section/utils";
import { PricingModal } from "@/app/components/Pricing Section/PricingModal";
import { inflate } from "node:zlib";

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

interface ModalDetails {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const services: Service[] = [
  {
    type: "training",
    name: "Trening",
    pricing: [
      { name: "1h treningu personalnego, terapii ruchowej", price: 160 },
      { name: "8h treningów personalnych, terapii ruchowych", price: 1200 },
    ],
    button: "SPRAWDŹ SZCZEGÓŁY",
  },
  {
    type: "onlineTraining",
    name: "Współpraca w trybie niestacjonarnym",
    serviceDetails: "Abonament miesięczny",
    pricing: 550,
    desc:
      "Tryb zaoczny to elastyczna forma współpracy trenerskiej,\n" +
      "idealna dla osób, które chcą łączyć treningi z codziennymi\n" +
      "obowiązkami w elastycznym dla siebie wymiarze godzin.",
    button: "SPRAWDŻ SZCZEGÓŁY",
  },
];
const TrainingCard: React.FC<Service & ModalDetails> = ({
  name,
  pricing,
  button,
  isOpen,
  openModal,
  closeModal,
}) => {
  return (
    <div className="px-10 py-14 flex flex-col gap-8 items-center shadow-custom">
      <span className="text-2xl md:text-3xl font-bold text-white">{name}</span>
      {isOpen && (
        <PricingModal modalType={"training"} closeModal={() => closeModal()} />
      )}
      {Array.isArray(pricing) &&
        pricing.map(({ name, price }, index) => (
          <div key={index} className="flex justify-between w-full">
            <span className="text-base md:text-xl text-white text-left">
              {name}
            </span>
            <span className="text-base md:text-xl text-zp-orange-500 font-bold text-right">
              {price} zł
            </span>
          </div>
        ))}
      <button
        className="bg-white text-base font-bold text-zp-orange-500 px-14 py-2"
        onClick={() => openModal()}
      >
        {button}
      </button>
    </div>
  );
};

// Reusable component for non-training service cards
const ServiceCard: React.FC<Service & ModalDetails> = ({
  type,
  name,
  desc,
  serviceDetails,
  pricing,
  button,
  isOpen,
  openModal,
  closeModal,
}) => (
  <div className="px-10 py-14 flex flex-col gap-8 items-center justify-between">
    <span className="text-2xl md:text-3xl font-bold text-white">{name}</span>
    {isOpen && (
      <PricingModal modalType={"cooperation"} closeModal={() => closeModal()} />
    )}
    {desc && <span className="text-base md:text-xl text-white">{desc}</span>}
    <div className="flex justify-between w-full">
      <span className="text-base md:text-xl text-white text-left">
        {serviceDetails}
      </span>
      <span className="text-base md:text-xl text-zp-orange-500 font-bold text-right">
        {typeof pricing === "number" && `${pricing} zł`}
      </span>
    </div>
    {button && (
      <button
        onClick={() => openModal()}
        className={`${type === "massage" ? "bg-zp-orange-500 text-white" : "bg-white text-zp-orange-500"} text-base font-bold px-14 py-2`}
      >
        {button}
      </button>
    )}
  </div>
);

export const PricingCard: React.FC<PricingPros> = ({ type }) => {
  const { isOpen, openModal, closeModal } = usePricingModal();
  const filteredService = services.find((service) => service.type === type);

  return (
    <div className="w-full md:w-[493px] h-[591px] bg-black shadow-custom">
      {type === "training" && filteredService ? (
        <TrainingCard
          name={filteredService.name}
          pricing={filteredService.pricing}
          button={filteredService.button}
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
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
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        )
      )}
    </div>
  );
};

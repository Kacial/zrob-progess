import React from "react";
import {
  CooperationDetails,
  TrainingDetails,
} from "@/app/components/Pricing Section/Details";

interface PricingModal {
  closeModal: () => void;
  modalType: "training" | "cooperation";
}

export const PricingModal: React.FC<PricingModal> = ({
  closeModal,
  modalType,
}) => (
  <section
    className={
      "fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
    }
    onClick={closeModal}
  >
    <div
      className={
        "bg-black p-6 rounded-lg shadow-lg max-w-4xl w-full flex flex-col gap-5 overflow-y-auto max-h-[90vh]"
      }
      onClick={(e) => e.stopPropagation()}
    >
      {modalType === "training" ? <TrainingDetails /> : <CooperationDetails />}
      <button
        onClick={closeModal}
        className={"bg-zp-orange-500 text-white font-bold p-2 w-40"}
      >
        Zamknij
      </button>
    </div>
  </section>
);

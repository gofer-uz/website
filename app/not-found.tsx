import React from "react";

export default function NotFound() {
  return (
    <div className="nx-flex nx-flex-col nx-items-center nx-justify-center nx-h-screen nx-text-center">
      <h1 className="nx-text-4xl nx-font-bold">404 - Sahifa topilmadi</h1>
      <p className="nx-mt-4">
        Kechirasiz, siz qidirayotgan sahifa mavjud emas.
      </p>
      <a href="/" className="nx-mt-4 nx-text-primary-600 hover:nx-underline">
        Bosh sahifaga qaytish
      </a>
    </div>
  );
}

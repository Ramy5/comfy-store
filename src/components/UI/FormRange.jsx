import React, { useState } from "react";
import { formatPrice } from "../../utils";

const FormRange = ({ label, name, size, defaultValue }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="form-control">
      <label className="cursor-pointer label" htmlFor={name}>
        <span className="capitalize label-text">{label}</span>
        <span className="">{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        className={`range range-secondary ${size}`}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        defaultValue={defaultValue}
      />
      <div className="flex items-center justify-between px-2 mt-2 text-sm">
        <span className="text-sm font-bold">0</span>
        <span className="text-sm font-bold">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;

"use client";

type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export const QuantityStepper = ({ value, onChange, min = 1, max = 10 }: QuantityStepperProps) => {
  const handle = (next: number) => {
    if (next < min || next > max) return;
    onChange(next);
  };

  return (
    <div className="flex items-center rounded-full border border-slate-200">
      <button
        type="button"
        className="px-3 py-1 text-lg text-slate-500 hover:text-slate-900"
        onClick={() => handle(value - 1)}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-[2rem] text-center text-sm font-medium text-slate-700">
        {value}
      </span>
      <button
        type="button"
        className="px-3 py-1 text-lg text-slate-500 hover:text-slate-900"
        onClick={() => handle(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

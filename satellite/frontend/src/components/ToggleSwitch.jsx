import { useState } from "react";

export default function ToggleSwitch({ label, onToggle }) {

  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    setEnabled(!enabled);
    onToggle(!enabled);
  };

  return (

    <div className="flex items-center justify-between">

      <span className="text-sm text-gray-300">
        {label}
      </span>

      <button
        onClick={toggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition
        ${enabled ? "bg-indigo-600" : "bg-gray-600"}`}
      >

        <div
          className={`bg-white w-4 h-4 rounded-full shadow transform transition
          ${enabled ? "translate-x-6" : ""}`}
        />

      </button>

    </div>

  );
}
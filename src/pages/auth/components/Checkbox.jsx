import React from "react";

function Checkbox({values, onChange, name}) {
  return (
    <>
      <div className="flex items-center">
        <input
          id="remember-me"
          name={name}
          type="checkbox"
          checked={values}
          onChange={onChange}
          className="h-4 w-4 appearance-none border border-[#D49F1B] rounded bg-white focus:ring-[#1C406D] checked:bg-[#1C406D] checked:border-transparent relative"
          style={{
            backgroundColor: values ? "#1C406D" : "white", // Checkbox background
          }}
        />
        <style jsx>{`
          input[type="checkbox"] {
            position: relative;
          }

          input[type="checkbox"]::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            border-radius: 4px;
          }

          input[type="checkbox"]:checked::before {
            background-color: #1c406d; /* Background when checked */
          }

          input[type="checkbox"]:checked::after {
            content: "✓"; /* Unicode checkmark */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 12px;
            color: #d49f1b; /* Checkmark color */
          }
        `}</style>

        <label
          htmlFor={name}
          className="ml-2 block text-sm font-semibold text-gray-900"
        >
          Ingatkan saya pada perangkat ini
        </label>
      </div>
    </>
  );
}

export default Checkbox;

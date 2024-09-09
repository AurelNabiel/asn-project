import React from "react";

export default function Card() {
  return (
    <>
      <div class="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 ">
        <div class="bg-blue-500 text-white p-6 rounded-lg flex text-center">
          <div>
            <p class="text-xl font-bold">21</p>
            <p class="text-sm">Juli</p>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-lg">Pengaduan sedang di proses</h3>
          <p class="text-sm">sedang di proses :</p>
          <p class="text-sm">
            Estimasi selesai{" "}
            <a href="#" class="text-blue-500">
              24 Juli 2024
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";


export default function Card({ i }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/pengumuman/${i.id}`);
        }}
        className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
      >
        <div className="bg-blue-500 text-white p-6 rounded-lg flex text-center">
          <div>
            <p className="text-xl font-bold">{new Date(i.date).getDate()}</p>

            <p className="text-sm">
              {new Date(i.date).toLocaleString("id-ID", { month: "long" })}
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">{i.title}</h3>
          <p className="text-sm">Status: {i.status}</p>
          <p className="text-sm">
            Estimasi selesai{" "}
            <a href="#" className="text-blue-500">
              {new Date(i.doneAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex h-full w-full">
      <Navbar open={open} setOpen={setOpen} />
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main
          className={` h-full flex-none transition-all ml-[153px]`}
        >
          <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] pl-2 md:pr-2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

"use client";
import useNetworkStatus from "@/hooks/useNetworkStatus";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const NoConnectionComponent = () => {
  const isOnline = useNetworkStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div
      className="max-w-sm w-full min-h-screen shadow-lg bg-gray-50/80 mx-auto
    text-gray-900 gap-4 flex flex-col overflow-x-hidden"
    >
      {/* HEADER */}
      <Header />
      <div className="py-12" />
      <div className="w-full px-2 flex flex-col gap-6">
        <div className="text-center text-red-600 font-semibold">
          You are currently offline. Please check your internet connection.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoConnectionComponent;

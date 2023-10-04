import React from "react";
import Image from "next/image";

export default function CardsIcons({ icon }) {
  return (
    <>
      <div className="image-container"></div>
      <Image
        className="image-style"
        src={icon}
        width={24}
        height={24}
        style={{ fontWeight: "400" }}
        alt="notification"
      />
    </>
  );
}

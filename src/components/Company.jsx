import React, { useEffect, useState } from "react";

export default function Company() {
  const [companyIMG, setCompanyIMG] = useState([]);

  useEffect(() => {
    fetch("/company.json")
      .then((response) => response.json())
      .then((data) => setCompanyIMG(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <main className="mt-16  padding-x">
      <div className="grayscale flex items-center justify-center gap-5 flex-wrap">
        {companyIMG.map((item) => (
          <img key={item.id} src={item.img} alt={item.alt} className="mr-10" />
        ))}
      </div>
    </main>
  );
}

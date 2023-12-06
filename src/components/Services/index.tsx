import React, { useState, useEffect } from "react";

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/services");
        const data = await response.json();
        if (data.success) {
          setServices(data.data);
        } else {
          console.error("Failed to fetch services:", data.message);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 flex flex-wrap">
      
      <div className="mt-16 justify-center grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg border border-1-gray-100"
          >
            <div className="p-8">
              <img
                src={service.icon}
                loading="lazy"
                width="200"
                height="200"
                className="w-12 h-12"
                alt={service.title}
              />
              <div className="space-y-2 mt-4">
                <h5 className="text-xl font-semibold text-black">
                  {service.title}
                </h5>
                <p className="text-black" style={{ wordWrap: "break-word" }}>
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Services;

import React from "react";
import { useNavigate } from "react-router";

const premiumCourcesList = [
  "Docker",
  "Kubernetes",
  "Python",
  "Jenkins",
  "AWS",
  "GCP",
  "Azure",
];

export const PremiumCources = () => {
  const navigate = useNavigate();
  return (
    <div>
      {premiumCourcesList &&
        premiumCourcesList.map((cource, index) => (
          <div
            className="text-danger"
            onClick={() => {
              navigate(`/cources/${cource}`, { state: cource });
            }}
            key={index}
          >
            {cource}
          </div>
        ))}
    </div>
  );
};

export default PremiumCources;

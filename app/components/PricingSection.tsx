"use client";

import { useState } from "react";

const pricingPlans = [
    {
        id: "basic",
        name: "Basic Plan",
        featureName: "Basic Features",
        price: 250,
        features: [
            { text: "Economical shipping options", included: true },
            { text: "Dedicated customer support", included: true },
            { text: "50 Freight Shipments", included: true },
            { text: "Faster delivery options", included: true },
            { text: "Expedited shipping options", included: false },
        ],
    },
    {
        id: "standard",
        name: "Standard Plan",
        featureName: "Most Popular",
        price: 550,
        features: [
            { text: "Economical shipping options", included: true },
            { text: "Real Time Rate Shopping", included: true },
            { text: "Dedicated customer support", included: true },
            { text: "50 Freight Shipments", included: true },
            { text: "Faster delivery options", included: true },
            { text: "Expedited shipping options", included: false },
        ],
    },
    {
        id: "premium",
        name: "Premium Plan",
        featureName: "For Advanced Users",
        price: 750,
        features: [
            { text: "Economical shipping options", included: true },
            { text: "Dedicated customer support", included: true },
            { text: "50 Freight Shipments", included: true },
            { text: "Faster delivery options", included: true },
            { text: "Expedited shipping options", included: true },
            { text: "Priority handling", included: true },
        ],
    },
];

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState("basic");
    const activePlan = pricingPlans.find((plan) => plan.id === activeTab);

    return (
        <div className="ep-price-section pt-120 content">
            <div className="container">
                <div className="section-title text-center pb-60">
                    <h6 className="subtitle d-inline-flex align-items-center">
                        Tranzit Pricing Plans
                        <span className="icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="17"
                                viewBox="0 0 20 17"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.3171 1.10946e-05L19.3136 8.18934L11.3171 16.3787L3.32062 16.3787L11.3171 8.18934L3.32062 1.14441e-05L11.3171 1.10946e-05Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.686401 16.3787L0.686401 8.18934L0.686401 1.14441e-05L4.68376 4.09467L8.68199 8.18934L4.68376 12.284L0.686401 16.3787Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </h6>
                    <h2 className="heading-two">Perfect Tranzit Plan for You</h2>
                </div>
                <div className="price-body bg-two rounded-20">
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="nav flex-column nav-pills"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                {pricingPlans.map((plan) => (
                                    <button
                                        key={plan.id}
                                        className={`nav-link feature-link fade-up d-flex justify-content-between align-items-center mb-3 ${activeTab === plan.id ? "active" : ""}`}
                                        onClick={() => setActiveTab(plan.id)}
                                        type="button"
                                        role="tab"
                                    >
                                        <span className="plan-wraper d-flex flex-column">
                                            <span className="plan-name heading-four">
                                                {plan.name}
                                            </span>
                                            <span className="feature-name text-start p2 mt-3">
                                                {plan.featureName}
                                            </span>
                                        </span>
                                        <span className="plan-price heading-three">
                                            ${plan.price}.00{" "}
                                            <span className="p2">/ Per Month</span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6 fade-up">
                            <div className="tab-content pt-4 pt-lg-0">
                                <div className="tab-pane fade show active">
                                    <h6 className="heading-six feature-title">
                                        Comprehensive, all-inclusive package
                                    </h6>
                                    <div className="feature-list">
                                        <ul className="list-unstyled">
                                            {activePlan?.features.map((feature, index) => (
                                                <li
                                                    key={index}
                                                    className="d-flex align-items-center gap-3 justify-content-between"
                                                >
                                                    {feature.text}
                                                    <span
                                                        className={`checkmark ${!feature.included ? "uncheck" : ""} d-flex align-items-center justify-content-center rounded-pill`}
                                                    >
                                                        <i
                                                            className={`fa-solid ${feature.included ? "fa-check" : "fa-xmark"}`}
                                                        ></i>
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

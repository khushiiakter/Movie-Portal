const Membership = () => {
  const membershipPlans = [
    {
      name: "Basic",
      price: 99,
      description: "Perfect for casual movie watchers.",
      features: [
        "Access to basic movies",
        "Up to 5 favorites",
        "Standard support",
      ],
    },
    {
      name: "Premium",
      price: 199,
      description: "Ideal for frequent movie enthusiasts.",
      features: [
        "Unlimited movies",
        "Up to 20 favorites",
        "Priority support",
        "Exclusive content",
      ],
    },
    {
      name: "Pro",
      price: 399,
      description: "For ultimate movie lovers.",
      features: [
        "All Premium features",
        "Unlimited favorites",
        "VIP content access",
      ],
    },
  ];
  return (
    <div className=" text-white py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-5xl  text-3xl font-bold text-[#5f1a89] mb-6 text-center">
          Membership Plans
        </h2>
        <p className="text-gray-500 text-center my-6">
          Unlock premium features and enjoy exclusive benefits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-6">
          {/* Membership Card */}
          {membershipPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-900 p-6 flex flex-col justify-between rounded-lg shadow-lg hover:shadow-2xl"
            >
              <h3 className="text-3xl text-center font-bold mb-4 text-[#8e60ac]">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold mb-2">${plan.price}</p>
              <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
              <ul className="text-sm  text-gray-300 mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span className="text-red-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary border-none bg-[#5f1a89]  hover:bg-red-800  w-full">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;

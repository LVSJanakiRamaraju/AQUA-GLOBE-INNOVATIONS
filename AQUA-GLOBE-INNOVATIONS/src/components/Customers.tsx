const customers = [
  {
    name: "Ramesh",
    image: "/customer1.jpeg",
    message: "Excellent product! My pond health improved in just a week.",
  },
  {
    name: "Ramu",
    image: "/customer2.jpeg",
    message: "Very effective. Shrimp are more active and healthy now.",
  },
  {
    name: "Sarath",
    image: "/customer3.jpeg",
    message: "Trusted brand. Great support from Seawel Formulations team.",
  }
];

const CustomerTestimonials = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
        <br/>
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Happy Customers
      </h2>

      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        {customers.map((cust, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            <img
              src={cust.image}
              alt={cust.name}
              className="w-84 h-64 object-cover border-4 border-blue-200 mb-4"
            />
            <p className="italic text-gray-600 mb-2">"{cust.message}"</p>
            <p className="font-semibold text-blue-700">{cust.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;

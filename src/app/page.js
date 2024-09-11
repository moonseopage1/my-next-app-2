import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:4000/shoes", {
    next: { revalidate: 5 },
  });
  const shoes = await res.json();
  return (
    <div className="max-w-[1440px] mx-auto my-5">
      <h2 className="text-3xl font-bold text-center mb-10">
        Welcome to Next.js App
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {shoes?.slice(0, 3)?.map((shoe) => (
          <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe?.title}
                <div className="badge badge-secondary">{shoe?.price}</div>
              </h2>
              <p>{shoe?.description}</p>
              <div className="card-actions justify-end">
                <div className="btn btn-outline btn-primary">Buy Now</div>
                <div className="btn btn-outline btn-primary">Details</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link href="/all-shoes" className="btn btn-primary">
          See All
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

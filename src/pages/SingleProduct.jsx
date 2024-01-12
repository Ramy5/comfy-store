import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmount } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { colors, company, description, image, price, title } =
    product.attributes;
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  return (
    <div>
      {/* BREAD CRUMBS LINKS */}
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      {/* SINGLE PRODUCT */}
      <section className="grid mt-6 gap-14 lg:grid-cols-2">
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg h-96 w-96 lg:w-full"
        />

        <div>
          <h2 className="text-3xl font-bold capitalize">{title}</h2>
          <h5 className="my-2 text-xl font-bold">{company}</h5>
          <h4 className="text-xl">{formatPrice(price)}</h4>
          <p className="my-6 leading-8">{description}</p>

          {/* COLORS */}
          <div className="">
            <p className="mb-2 text-lg font-medium">Colors</p>
            <div className="flex gap-2">
              {colors.map((color, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setActiveColor(color)}
                    className={`${
                      color === activeColor
                        ? "border-2 scale-110 opacity-100"
                        : "opacity-50"
                    }  w-6 h-6 transition-all duration-300 rounded-full`}
                    style={{ backgroundColor: `${color}` }}
                  ></button>
                );
              })}
            </div>
          </div>

          {/* AMOUNT */}
          <div className="mt-8">
            <p className="mb-2 text-lg font-medium">Amount</p>
            <select
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full max-w-xs select select-bordered select-secondary"
            >
              {generateAmount(20)}
            </select>
          </div>

          {/* ADD TO CART */}
          <div className="mt-8">
            <button
              className="btn btn-secondary"
              onClick={() => console.log("add to cart")}
            >
              <h3 className="font-semibold uppercase">Add to Cart</h3>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;

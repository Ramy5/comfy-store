import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const SearchFilter = () => {
  const { meta } = useLoaderData();

  return (
    <Form className="grid items-end p-6 my-4 rounded-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 bg-base-200">
      {/* SEARCH */}
      <FormInput
        label="Search Product"
        type="search"
        name="search"
        defaultValue=""
        size="input-sm"
      />

      {/* CATEGORY */}
      <FormSelect
        label="select category"
        name="category"
        defaultValue=""
        size="select-sm"
        list={meta.categories}
      />

      {/* COMPANY */}
      <FormSelect
        label="select company"
        name="company"
        defaultValue=""
        size="select-sm"
        list={meta.companies}
      />

      {/* SORT BY */}
      <FormSelect
        label="sort by"
        name="sort"
        defaultValue=""
        size="select-sm"
        list={[
          "price (lowest)",
          "price (highest)",
          "name (a - z)",
          "name (z - a)",
        ]}
      />

      {/* ACTION BUTTONS */}
      <button className="uppercase btn btn-secondary text-secondary-content btn-sm">
        search
      </button>
      <Link
        to="/products"
        className="uppercase btn btn-primary text-primary-content btn-sm"
      >
        reset
      </Link>
    </Form>
  );
};

export default SearchFilter;

const FormInput = ({ label, type, name, defaultValue }) => {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        className="input input-bordered"
      />
    </label>
  );
};

export default FormInput;

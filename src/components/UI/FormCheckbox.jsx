const FormCheckbox = ({ name, size, label, defaultValue }) => {
  return (
    <div className="flex items-center form-control">
      <label className="cursor-pointer label" htmlFor={name}>
        <span className="capitalize label-text">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-secondary ${size}`}
      />
    </div>
  );
};

export default FormCheckbox;

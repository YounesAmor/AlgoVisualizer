const Slider = ({ min, max, handleChange, defaultValue }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      onChange={(e) => handleChange(e)}
      defaultValue={defaultValue}
    />
  );
};

export default Slider;

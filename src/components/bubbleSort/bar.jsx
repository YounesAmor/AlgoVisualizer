const Bar = ({ length, index }) => {
  const barStyle = {
    height: length,
    background: "gray",
    marginTop: 200 - length,
  };
  return (
    <div
      className="w-[8px] rounded-lg"
      style={barStyle}
      id={index}
      value={length}
    ></div>
  );
};

export default Bar;

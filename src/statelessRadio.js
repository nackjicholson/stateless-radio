function statelessRadio(React, config) {
  const {
    name,
    defaultValue,
    onSelection = () => void 0
  } = config;

  function StatelessRadio(props) {
    const defaultChecked = (defaultValue === props.value);

    function handleSelectionChange() {
      onSelection(props.value);
    }

    return (
      <input
        {...props}
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        onChange={handleSelectionChange}
      />
    );
  }

  StatelessRadio.propTypes = {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool
    ])
  };

  return StatelessRadio;
}

export default statelessRadio;

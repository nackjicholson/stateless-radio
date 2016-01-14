function statelessRadio(React) {
  function StatelessRadio(props) {
    const {
      baseId,
      defaultValue,
      inputs = [],
      titleText,
      onSelection = () => {}
    } = props;

    function handleSelectionChange(event) {
      onSelection(event.target.value);
    }

    const titleId = `${baseId}__title`;

    return (
      <div id={baseId}>
        <p id={titleId}>{titleText}</p>
        {inputs.map((inputItem, index) => {
          const inputId = `${baseId}__input${index}`;
          const defaultChecked = (defaultValue === inputItem.value);

          return (
            <div key={index}>
              <input
                id={inputId}
                name={baseId}
                type="radio"
                value={inputItem.value}
                defaultChecked={defaultChecked}
                onChange={handleSelectionChange}
              />
              <label htmlFor={inputId}>{inputItem.label}</label>
            </div>
          );
        })}
      </div>
    );
  }

  StatelessRadio.propTypes = {
    baseId: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    inputs: React.PropTypes.array,
    titleText: React.PropTypes.string,
    onSelection: React.PropTypes.func
  };

  return StatelessRadio;
}

export default statelessRadio;

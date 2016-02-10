import statelessRadio from './statelessRadio';

function statelessRadioGroup(React) {
  function StatelessRadioGroup(props) {
    const radioConfig = {
      defaultValue: props.defaultValue,
      name: props.name,
      onSelection: props.onSelection
    };

    return props.children(statelessRadio(React, radioConfig));
  }

  StatelessRadioGroup.propTypes = {
    name: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    onSelection: React.PropTypes.func,
    children: React.PropTypes.func.isRequired
  };

  return StatelessRadioGroup;
}

export default statelessRadioGroup;

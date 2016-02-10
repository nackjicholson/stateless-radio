import $ from 'teaspoon';
import assert from 'assert';
import React from 'react';
import { spy } from 'sinon';
import statelessRadioGroup from './statelessRadioGroup';

function createComponent(customProps = {}) {
  const props = Object.assign({ name: 'test-name' }, customProps);
  const StatelessRadioGroup = statelessRadioGroup(React);
  return (
    <StatelessRadioGroup {...props}>
      {(StatelessRadio) =>
        <div>
          <StatelessRadio value="alpha" />
          <StatelessRadio value="bravo" />
          <StatelessRadio value="charlie" />
        </div>
      }
    </StatelessRadioGroup>
  );
}

describe('StatelessRadioGroup', () => {
  it('should return a function', () => {
    const actual = typeof statelessRadioGroup(React);
    const expected = 'function';

    assert.equal(actual, expected, 'statelessRadioGroup returns stateless component function');
  });

  it('should render radio input group via the provided child function', () => {
    const component = createComponent();

    const actual = $(component)
      .render()
      .find('div input[name=test-name]')
      .length;
    const expected = 3;

    assert.equal(actual, expected, 'renders nodes returned from children function');
  });

  it('should be able to check a radio button by default', () => {
    const props = { defaultValue: 'bravo' };
    const component = createComponent(props);

    const $checkedInput = $(component).render().find('div input[defaultChecked]');
    const checkedInputNode = $checkedInput.dom();

    const actual = checkedInputNode.value;
    const expected = 'bravo';

    assert.equal(actual, expected, 'radio input with value equal to defaultValue was checked');
  });

  it('should take an onSelection callback prop to respond to selections', () => {
    const props = { onSelection: spy() };
    const component = createComponent(props);

    $(component)
      .render()
      .find('input[value=bravo]')
      .trigger('change');

    assert(props.onSelection.calledOnce, 'onSelection callback is called once');
    assert.equal(
      props.onSelection.args[0].length,
      1,
      'onSelection callback called with one argument'
    );

    const actual = props.onSelection.args[0][0];
    const expected = 'bravo';

    assert.equal(actual, expected);
  });
});

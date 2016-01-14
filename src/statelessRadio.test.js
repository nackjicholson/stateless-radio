import $ from 'teaspoon';
import assert from 'assert';
import React from 'react';
import { spy } from 'sinon';
import statelessRadio from './statelessRadio';

function createComponent(customProps = {}) {
  const props = Object.assign({ baseId: 'test-baseId' }, customProps);
  const StatelessRadio = statelessRadio(React);
  return <StatelessRadio {...props} />;
}

describe('StatelessRadio', () => {
  it('should return a function', () => {
    const actual = typeof statelessRadio(React);
    const expected = 'function';

    assert.equal(
      actual,
      expected,
      'statelessRadio factory returns stateless component constructor'
    );
  });

  it('should render a wrapper div with id equal to baseId prop', () => {
    const component = createComponent();

    const actual = $(component)
      .render()
      .find('div[id=test-baseId]')
      .length;
    const expected = 1;

    assert.equal(actual, expected, 'rendered wrapper div with id from baseId prop');
  });

  it('should render a p tag with the text from the titleText prop', () => {
    const props = { titleText: 'test.title' };
    const component = createComponent(props);

    const actual = $(component)
      .render()
      .find('p[id=test-baseId__title]')
      .text();
    const expected = 'test.title';

    assert.equal(
      actual,
      expected,
      'rendered a title with the text from the titleText prop'
    );
  });

  it('should render radio inputs and their labels from the inputs prop', () => {
    const props = {
      inputs: [
        { value: 'alpha.value', label: 'alpha.label' },
        { value: 'bravo.value', label: 'bravo.label' },
        { value: 'charlie.value', label: 'charlie.label' }
      ]
    };
    const component = createComponent(props);
    const $component = $(component).render();
    const $inputs = $component.find('input[type=radio]');
    const $labels = $component.find('label');

    const actualInputValues = $inputs
      .map(inputNode => inputNode.value)
      .get();
    const expectedInputValues = [
      'alpha.value',
      'bravo.value',
      'charlie.value'
    ];

    assert.deepEqual(
      actualInputValues,
      expectedInputValues,
      'renders 3 inputs with values from each item in the inputs collection'
    );

    const actualLabelTexts = $labels
      .map(labelNode => $(labelNode).text())
      .get();
    const expectedLabelTexts = [
      'alpha.label',
      'bravo.label',
      'charlie.label'
    ];

    assert.deepEqual(
      actualLabelTexts,
      expectedLabelTexts,
      'renders 3 labels with the label text provide in each item of the inputs collection'
    );
  });

  it('should check a default input by using the defaultValue prop', () => {
    const props = {
      defaultValue: 'bravo.value',
      inputs: [
        { value: 'alpha.value', label: 'alpha.label' },
        { value: 'bravo.value', label: 'bravo.label' },
        { value: 'charlie.value', label: 'charlie.label' }
      ]
    };
    const component = createComponent(props);
    const $component = $(component).render();
    const $inputs = $component.find('input');

    const actual = $inputs
      .get()
      .filter(inputNode => inputNode.checked)
      .map(inputNode => inputNode.value);
    const expected = ['bravo.value'];

    assert.deepEqual(
      actual,
      expected,
      'checked the input with the value equal to defaultValue prop'
    );
  });

  it('should take an onSelection callback prop', () => {
    const props = {
      inputs: [{}],
      onSelection: spy()
    };
    const event = { target: { value: 'test.value' } };
    const component = createComponent(props);

    $(component)
      .render()
      .find('input[name=test-baseId]')
      .trigger('change', event);

    assert(props.onSelection.calledOnce, 'onSelection callback was called once');
    assert.equal(
      props.onSelection.args[0].length,
      1,
      'onSelection callback called with 1 argument'
    );

    const actual = props.onSelection.args[0][0];
    const expected = 'test.value';

    assert.equal(
      actual,
      expected,
      'onSelection callback called with value of the option which was the target of the change'
    );
  });
});

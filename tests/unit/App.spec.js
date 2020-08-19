import {
  shallowMount,
  mount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import OnOff from '@/components/OnOff.vue';

it('renders props.msg when passed', () => {
  //Arrange
  const msg = 'Hello world!'

  //Act
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg
    }
  })

  //Assert
  expect(wrapper.text()).toMatch(msg)
})

test('should show "off" when button is clicked', async () => {
  //Arrange
  const expected = 'Off';
  let wrapper = shallowMount(OnOff);

  //Act
  let button = wrapper.find('button'); // CSS selector
  await button.trigger('click');
  let actual = button.text();

  //Assert
  expect(actual).toBe(expected);
})

import {
  render,
  fireEvent,
  getByRole
} from '@testing-library/vue'
import ButtonIncrement from '@/components/ButtonIncrement.vue'

test('increments value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const {
    getByText
  } = render(ButtonIncrement)

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0')

  const button = getByText('increment')

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})

test('decrease value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const {
    getByText
  } = render(ButtonIncrement)

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0')

  const button = getByText('decrease');

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: -2')
})

import Option from '@/components/Option.vue'

test('find element with class selected', () => {
  //Arrange
  let wrapper = shallowMount(Option);
  const div = wrapper.find('div');
  const byClass = wrapper.find('.selected');

  //Assert
  expect(div.exists()).toBe(true);
  expect(byClass.element.classList).toContain('selected');
  expect(byClass.element.classList).toContain('option');
})
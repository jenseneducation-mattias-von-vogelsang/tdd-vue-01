import {
  shallowMount,
  mount
} from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import OnOff from '@/components/OnOff.vue';

it('renders props.msg when passed', () => {
  //Arrange
  const msg = 'Hello world!';

  //Act
  const wrapper = shallowMount(HelloWorld, {
    propsData: {
      msg
    }
  });

  //Assert
  expect(wrapper.text()).toMatch(msg);
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
} from '@testing-library/vue';
import ButtonIncrement from '@/components/ButtonIncrement.vue';

test('increments value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const {
    getByText
  } = render(ButtonIncrement);

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0');

  const button = getByText('increment');

  // Dispatch a native click event to our button element.
  await fireEvent.click(button);
  await fireEvent.click(button);

  getByText('Times clicked: 2');
})

test('decrease value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const {
    getByText
  } = render(ButtonIncrement);

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('Times clicked: 0');

  const button = getByText('decrease');

  // Dispatch a native click event to our button element.
  await fireEvent.click(button);
  await fireEvent.click(button);

  getByText('Times clicked: -2');
})

import Option from '@/components/Option.vue';

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

import TextInput from '@/components/TextInput.vue';

test('expect component input section to contain the text Anonymous at creation/mount', async () => {
  //Arrange
  let wrapper = shallowMount(TextInput);

  //Act
  const input = wrapper.find('input');

  //Assert
  expect(input.element.placeholder).toBe('');

  //Mock mounted method
  await wrapper.vm.changeText();

  //Test again if mounted method works properly
  expect(input.element.placeholder).toBe('Anonymous');
})

test('on input change the first letter shall become capital once input is completed', async () => {
  //Arrange
  let wrapper = shallowMount(TextInput);

  //Act
  const textField = wrapper.find('input');
  textField.element.value = 'vi äger';
  await textField.trigger('input');

  //Assert
  expect(textField.element.value).toBe('Vi äger');
})

import ToDos from '@/components/ToDos.vue';

test('check if item gets sent to index 0 when we click the button', async () => {
  //Arrance
  // const {
  //   getByText
  // } = render(ToDos);
  let wrapper = shallowMount(ToDos);

  //Act
  const input = wrapper.find('input');
  const button = wrapper.find('#ost');
  // const input = wrapper.find('input');
  input.element.value = 'hejhopp';
  expect(input.element.value).toContain('hejhopp');

  await button.trigger('click');
  // let item = wrapper.find('#hejhoppli');

  expect(wrapper.vm.items).toEqual(["hejhopp"]);

  // input.element.value = 'secondboi';
  // expect(input.element.value).toContain('secondboi');

  // await wrapper.find('#ost').trigger('click');

  // const liArray = wrapper.findAll('li');
  // const firstLi = liArray.at(0);

  // expect(item.text()).toContain('hejhopp');
  // expect(firstLi.is('li')).toBe(true);

  // const moveLiBtn = wrapper.find('#secondboi');
  // const secondboiLi = wrapper.find('#secondboili')
  // expect(secondboiLi.exists()).toBe(true);
  // moveLiBtn.trigger('click');

  // const liArray2 = wrapper.findAll('li');
  // const firstLi2 = liArray2.at(0);
  // expect(firstLi2.text()).toContain('secondboi');
  //Assert
})
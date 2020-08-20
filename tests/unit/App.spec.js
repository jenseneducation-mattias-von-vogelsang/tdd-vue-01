import {
  shallowMount,
  mount,
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
  let wrapper = shallowMount(ToDos);

  //Bind input element via wrapper.find()
  const input = wrapper.find('input');
  //Give value to input element
  input.element.value = 'hejhopp';

  //Test so that input has value
  expect(input.element.value).toContain('hejhopp');

  //Trigger input event, wait for update then trigger button to add ToDo
  await input.trigger('input');
  await wrapper.vm.$nextTick();
  await wrapper.find('#addToDo').trigger('click');

  //Test so that the item array has new item ('hejhopp')
  expect(wrapper.vm.items).toContain('hejhopp');

  //Find new ToDO which was added to the dom via v-for
  let item = wrapper.find('#hejhoppli');
  //Test so it contains our input from start
  expect(item.text()).toContain('hejhopp');

  //Give value to input element
  input.element.value = 'secondboi';
  //Test so that input has value
  expect(input.element.value).toContain('secondboi');

  //Trigger input event, wait for update then trigger button to add ToDo
  await input.trigger('input');
  await wrapper.vm.$nextTick();
  await wrapper.find('#addToDo').trigger('click');

  //Find all li elements and put in array
  const liArray = wrapper.findAll('li');
  const firstLi = liArray.at(0);

  //Test that our first item we added is at index 0
  expect(firstLi.is('#hejhoppli')).toBe(true);

  //Find the move up todo button to test if it works (puts item at index 0)
  const moveLiBtn = wrapper.find('#secondboi');
  //Find the other toDo we added to double-check that it exists in the dom
  const secondboiLi = wrapper.find('#secondboili')
  //Test it
  expect(secondboiLi.exists()).toBe(true);

  //Trigger the move up todo button
  await moveLiBtn.trigger('click');

  //Find all Lis again in new array
  const liArrayTestTwo = wrapper.findAll('li');
  const firstLiTestTwo = liArrayTestTwo.at(0);
  //The todo we moved up is now the first one.
  expect(firstLiTestTwo.is('#secondboili')).toBe(true);
})
import { shallowMount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

describe('Calculator.vue', () => {
  //console.dir(Calculator);
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(Calculator, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // }),
  it('renders correctly', () => {
    const wrapper = shallowMount(Calculator)
    expect(wrapper.element).toMatchSnapshot()
  })
  // test('digit & calc button clicked',() =>{
  //   const wrapper = shallowMount(Calculator)
  //   //wrapper.find('.digitbtn').trigger.click();
  //   console.dir(wrapper);
  // })
})

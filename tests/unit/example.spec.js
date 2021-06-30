import { shallowMount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'

const wrapper = shallowMount(Calculator)

describe('Calculator.vue', () => {
  it('renders correctly', () => {
    //const wrapper = shallowMount(Calculator)
    expect(wrapper.element).toMatchSnapshot();
  })
  it('Output should be 0 after clicking clear button',()=>{
    wrapper.vm.clear();
    expect(wrapper.vm.output).toBe(0);
  })
  
})

// describe('Output should be 0 after clicking clear button',() => {
//   wrapper.vm.clear();
//   // console.log(wrapper.vm.output,typeof wrapper.vm.output);
//   expect(wrapper.vm.output).toBe(0);
// })

wrapper.destroy()
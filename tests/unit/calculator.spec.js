import { shallowMount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'


describe('Calculator.vue', () => {
  /*it('renders correctly', () => {
    //const wrapper = shallowMount(Calculator)
    expect(wrapper.element).toMatchSnapshot();
  })*/
  it('Output should be 0 after clicking clear button',()=>{
    const wrapper = shallowMount(Calculator)
    wrapper.vm.clear();
    expect(wrapper.vm.output).toBe(0);
    wrapper.destroy()
  })
  test('Output length should reduce 1 after clicking delete btn',() => {
    const wrapper = shallowMount(Calculator)
    wrapper.find('.digitBtn').trigger('click');
    wrapper.find('.digitBtn').trigger('click');
    const curentOutputLength = wrapper.vm.output.length;
    wrapper.find('.delBtn').trigger('click');

    const expectedOutputLength = wrapper.vm.output.length; 
    expect(expectedOutputLength).toEqual(curentOutputLength-1);
    wrapper.destroy()
  })  
  
})

// describe('Output should be 0 after clicking clear button',() => {
//   wrapper.vm.clear();
//   // console.log(wrapper.vm.output,typeof wrapper.vm.output);
//   expect(wrapper.vm.output).toBe(0);
// })

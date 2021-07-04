import { shallowMount,mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator.vue'


describe('Calculator.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Calculator)
    expect(wrapper.element).toMatchSnapshot();
    wrapper.destroy()

  })
  test('Calculator app present',()=>{
    const wrapper = shallowMount(Calculator)
    expect(wrapper.is(Calculator)).toBe(true)
    wrapper.destroy()
  })
  it('Output should be 0 after clicking clear button',()=>{
    const wrapper = shallowMount(Calculator)
    wrapper.vm.clear();
    expect(wrapper.vm.output).toBe(0);
    wrapper.destroy()
  })
  test('Output length should reduce 1 after clicking delete btn',() => {
    const wrapper = shallowMount(Calculator)
    wrapper.find('.js-digitBtn-4').trigger('click');
    wrapper.find('.js-digitBtn-5').trigger('click');
    const curentOutputLength = wrapper.vm.output.length;
    wrapper.find('.delBtn').trigger('click');

    const expectedOutputLength = wrapper.vm.output.length; 
    expect(expectedOutputLength).toEqual(curentOutputLength-1);
    wrapper.destroy()
  })  
  test('result function test model-value',() =>{
    const wrapper = shallowMount(Calculator)

    wrapper.setData({ output: '99+101' })
    wrapper.vm.result();
    expect(wrapper.vm.output).toEqual('200');

    wrapper.setData({ output: '200-10' })
    wrapper.vm.result();
    expect(wrapper.vm.output).toEqual('190');
  })
  test('result function test UI',async () =>{
    const wrapper = mount(Calculator)
    wrapper.find('.js-digitBtn-4').trigger('click');
    wrapper.find('.js-digitBtn-5').trigger('click');
    wrapper.find('.js-calcBtn-x').trigger('click');
    wrapper.find('.js-digitBtn-6').trigger('click');
    await wrapper.vm.result();
    expect(wrapper.find('.js-output').exists()).toBe(true)
    // console.log('js-output',wrapper.find('.js-output').text());
    await wrapper.vm.$nextTick();
    // console.log('js-output',wrapper.find('.js-output').text());
    expect(wrapper.find('.js-output').text()).toEqual('270');
    // expect(wrapper.find('.js-output').text()).toEqual('270');
    wrapper.destroy()
  })
})

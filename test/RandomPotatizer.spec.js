import { createLocalVue, shallowMount } from '@vue/test-utils'
import RandomPotatizer from '@/components/RandomPotatizer.vue'

const localVue = createLocalVue()
jest.useFakeTimers()

describe('RandomPotatizer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(RandomPotatizer, {
      localVue,
    })
  })

  test('is a Vue instance', () => {
    expect(!!wrapper.vm).toBeTruthy()
  })

  test('should generate the same mood as the random when generateMood is called', () => {
    wrapper.vm.generateMood()
    expect(wrapper.vm.moodSelected).toEqual(wrapper.vm.randomMood)
  })

  test('should remove moodSelected and call generateRandomMood when resetMood is called', () => {
    wrapper.vm.generateRandomMood = jest.fn()
    wrapper.vm.resetMood()
    expect(wrapper.vm.moodSelected).toEqual({})
    expect(wrapper.vm.generateRandomMood).toHaveBeenCalled()
  })

  test('should change randomMood each 100ms when generateRandomMood is called', async () => {
    const mockMath = { ...global.Math }
    mockMath.random = () => 0.5
    mockMath.floor = () => 5
    global.Math = mockMath

    jest.advanceTimersByTime(100)
    await wrapper.vm.generateRandomMood()
    expect(wrapper.vm.randomMood).toEqual(wrapper.vm.moods[5])
  })
})

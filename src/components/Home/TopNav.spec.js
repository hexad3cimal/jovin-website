import { shallowMount} from '@vue/test-utils'
import TopNav from './TopNav.vue'

describe('top nav  spec',()=>{
    let wrapper;
    beforeAll(()=>{
        wrapper = shallowMount(TopNav)
    })

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('contains header tag', ()=>{
        expect(wrapper.find('header').exists()).toBe(true)
        expect(wrapper.findAll('header').length).toBe(1)
    })

    it('contains image tag', ()=>{
        expect(wrapper.find('img').exists()).toBe(true)
        expect(wrapper.findAll('img').length).toBe(1)
        expect(wrapper.find('img').attributes('src')).toBe('../../assets/images/logo-small.png')
    })

    it('contains header text', ()=>{
        expect(wrapper.find('.logo-text').text()).toBe('jovin thariyath')
    })
})

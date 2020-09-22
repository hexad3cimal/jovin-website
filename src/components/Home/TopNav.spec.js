import { shallowMount} from '@vue/test-utils'
import TopNav from './TopNav.vue'

describe('top nav functionality test',()=>{
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
})

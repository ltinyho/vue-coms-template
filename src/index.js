// es6 polyfill
import 'core-js/fn/array/find'
import 'core-js/fn/array/find-index'
import LessonLists from './components/lessonLists'


const kyyCom = {
  LessonLists
}

const install = function (Vue, opts = {}) {

  Object.keys(kyyCom).forEach((key) => {
    Vue.component(key, kyyCom[key])
  })

}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

module.exports = Object.assign(kyyCom, { install })   // eslint-disable-line no-undef

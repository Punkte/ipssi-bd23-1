import './style.css'
import Card from "./src/components/Card";
import UserPage from "./src/pages/UserPage";
import TabManager from "./src/utils/TabManager";

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: () => document.createElement('div'),
    params: [{ src: 'http://placekitten.com/200/200', text: 'A cat' }]
  },
  user: {
    component: UserPage,
  }
})

tabManager.openTabById('user')

document.querySelectorAll('[data-tabId]').forEach(element => {
  element.addEventListener('click', () => {
    tabManager.openTabById(element.getAttribute('data-tabId'))
  })
})
import Card from "./src/components/Card";

const rootElement = document.querySelector('#app')

const tabManager = new TabManager(rootElement, {
  page1: {
    component: Card,
    params: [{ src: 'http://placekitten.com/200/200', text: 'A cat' }]
  }
})

tabManager.openTabById('page1')
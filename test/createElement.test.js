import { test, expect, vi } from 'vitest'
import createElement from '../src/dom/createElement'

const tree = {
 tagName: 'div',
 text: 'Hello World',
 children: [{ tagName: 'span', classList: ['user'] }, { tagName: 'span', classList: ['user'] }]
}
test('should create an element', () => {
  const element  = createElement(tree)
  expect(element.textContent).toContain('Hello World')
})
test('should have children', () => {
  const element  = createElement(tree)
  expect(element.querySelectorAll('.user').length).toEqual(2)
})
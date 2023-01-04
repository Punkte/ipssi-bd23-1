import createElement from "../dom/createElement"

export default function Card({ src, text }) {
  const cardObject = {
    tagName: 'div',
    children: [
      {
        tagName: 'img',
        attributes: {
          src
        }
      },
      {
        tagName: 'p',
        text
      },
    ]
  }
  return createElement(cardObject)
}
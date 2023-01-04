export default function Card({ src, text }) {
  return {
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
}
import createElement from "../dom/createElement";
import Card from "./Card";

export default function CardList(arrayOfUsers) {
  return createElement({
    tagName: 'div',
    classList: ['users'],
    children: arrayOfUsers.map(({ first_name, avatar }) => Card({ text: first_name, src: avatar }))
  })
}
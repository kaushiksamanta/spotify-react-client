import { useEffect } from 'react';
import MenuList from './MenuList';

export interface IMenu {
  title: string;
  menuObject: typeof MenuList;
}

function Menu(props: IMenu) {

  useEffect(() => {
    const allLi = document?.querySelector('.menuContainer ul')?.querySelectorAll('li')
    allLi?.forEach((n) => {
      n.addEventListener('click', () => {
        allLi?.forEach((li) => {
          li.classList.remove('active')
        })
        n.classList.add('active')
      })
    })
  }, []);

  return (
    <div className="menuContainer">
      <p className="title">{props.title}</p>
      <ul>
        {props.menuObject && props.menuObject.map((menu) => (
          <li key={menu.id}>
            <a href="#">
              <i>{menu.icon}</i>
              <span>{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu;
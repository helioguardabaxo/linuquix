import Link from 'next/link'
import styled from 'styled-components'
import db from '../../../db.json'

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

const ListItem = styled.li`
  float: left;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  &:hover {
    background-color: #111;
  }
`

function NavBar({posts}) {
  return (
    <List>
      <ListItem>
        <Link href="/">
          <a>Home</a>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/about">
          <a>About</a>
        </Link>
      </ListItem>
    </List>
  )
}

export default NavBar
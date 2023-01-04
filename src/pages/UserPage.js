import CardList from "../components/CardList"

const fetchUsers = async () =>  {
  try {
    const req = await fetch('https://reqres.in/api/users')
    const res = await req.json()
  
    return res
  } catch(e) {
    throw new Error(e)
  }
}

const UserPage = async () => {
  const res = await fetchUsers()

  return CardList(res.data)
}

export default UserPage
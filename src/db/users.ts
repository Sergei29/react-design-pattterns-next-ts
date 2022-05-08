import { User } from "../types"
import { db, resolveData } from "."

const PATH_TO_USERS = "/users"

export const getAllUsers = () =>
  resolveData<User[]>(db.getData(PATH_TO_USERS) as User[])

export const saveUsers = (users: User[]) => {
  db.push(PATH_TO_USERS, users)
  db.reload()
}

export const getUserById = async (id: number) => {
  const users = await getAllUsers()
  return users.find((user) => user.id === id) || null
}

export const addNewUser = async (newUser: User) => {
  const currentUsers = await getAllUsers()
  const updatedUsers = [...currentUsers, newUser]
  saveUsers(updatedUsers)
  return newUser
}

export const deleteUserById = async (id: number) => {
  const userToDelete = await getUserById(id)
  if (!userToDelete) {
    return null
  }
  const users = await getAllUsers()
  const newUsersList = users.filter((user) => user.id !== id)
  saveUsers(newUsersList)
  return id
}

export const updateUser = async (updatedUser: User): Promise<User | null> => {
  let response: User | null = null

  const users = await getAllUsers()
  const newUsersList = users.map((currentUser) => {
    if (currentUser.id === updatedUser.id) {
      const { id, ...restCurrentUser } = currentUser
      const { id: incomingId, ...restUpdatedUser } = updatedUser
      const newUser = { id, ...restCurrentUser, ...restUpdatedUser }
      response = { ...newUser }
      return newUser
    }
    return currentUser
  })

  saveUsers(newUsersList)

  return response
}

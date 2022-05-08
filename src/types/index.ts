import React, {
  InputHTMLAttributes,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react"

export type InputElemProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "ref"
>

export type ButtonElemProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "ref"
>

export type User = {
  id: number
  name: string
  age: number
  hairColor: string
  hobbies: string[]
}

export type Product = {
  id: number
  name: string
  price: number
  description: string
  rating: number
}

export type Note = {
  id: string
  title: string
}

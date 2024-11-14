import { createContext, ReactNode, useState } from "react";

interface TodoContextProps {
  modalVisible: boolean
  title: string
  date: string
  list: ListProps[]
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  setList: React.Dispatch<React.SetStateAction<ListProps[]>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  handleFormSubmit(): void;
}

export const TodoContext = createContext({} as TodoContextProps)

export interface ListProps {
  id: string,
  title: string;
  date: string;
  status: string;
}

export default function TodoProvider({children}: {children: ReactNode}) {
  const [modalVisible, setModalVisible] = useState(false)

  const [list, setList] = useState<ListProps[]>([])

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')


  function handleFormSubmit() {
    const id = new Date().toLocaleTimeString()
    const status = 'pendente'

    const data =  { id, title, date, status }
    setList(value => ([...value, data]))

    setTitle("")
    setDate("")
  }


  return (
    <TodoContext.Provider
    value={{
      modalVisible,
      title,
      date,
      list,
      setModalVisible,
      setList,
      setTitle,
      setDate,
      handleFormSubmit,
    }}>
      {children}
    </TodoContext.Provider>
  )
}


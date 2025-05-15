import { useState } from 'react'
import type { AddTodoFormProps } from '../types'

export default function TodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex mx-auto gap-3 w-[60%] text-center shadow-md mt-6'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add a todo...'
        className='border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300'
      />
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-4 py-2 transition'
      >
        Add
      </button>
    </form>
  )
}

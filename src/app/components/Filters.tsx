'use client'

import { ChangeEventHandler, useEffect, useState } from "react"
import { useMainStore } from "../store/useMainStore"

export default function Filters() {
  const initialForm = {
    filter: '',
    category: '',
    show: '',
  }

  const filterProducts = useMainStore((state) => state.filterProducts)
  const [form, setForm] = useState(initialForm)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    filterProducts(form.filter)
  }, [form.filter])

  return (
    <section className="flex justify-between pr-4 lg:pl-4 lg:gap-8 xl:pl-16 py-2 bg-cyan-200 xl:gap-32">
      <div className="relative">
        <input
          className="border border-stone-500 rounded-lg ml-4 text-stone-800 outline-none pl-2"
          name="filter"
          value={form.filter}
          onChange={handleChange}
          placeholder="Buscar..."
        />
        <img src="/search.png" alt="buscar con la lupa" title="buscar con la lupa" className="absolute w-[1.3rem] right-1 top-[3px]" />
      </div>
      <label className="text-cyan-700">
        MOSTRAR:
        <input
          className="border border-stone-500 rounded-lg ml-4 text-stone-800 outline-none pl-2"
          placeholder="Todo"
        />
      </label>
      <label className="text-cyan-700">
        CATEGORIA
        <input
          className="border border-stone-500 rounded-lg ml-4 text-stone-800 outline-none pl-2"
          placeholder="Todo"
        />
      </label>
    </section>
  )
}
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
    <section className="flex justify-center xs:justify-between xl:justify-start pr-4 lg:pl-4 lg:gap-8 xl:pl-16 py-2 bg-cyan-200 xl:gap-32">
      <div className="relative">
        <input
          className="w-full border border-stone-500 rounded-lg ml-4 text-stone-800 outline-none pl-2 pr-7 xs:w-36 lg:w-max"
          name="filter"
          value={form.filter}
          onChange={handleChange}
          placeholder="Buscar..."
        />
        <img src="/search.png" alt="buscar con la lupa" title="buscar con la lupa" className="absolute w-[1.3rem] right-1 top-[3px]" />
      </div>
      <label className="text-cyan-700">
        <span className="hidden lg:inline">MOSTRAR:</span>
        <input
          className="hidden xs:inline border border-stone-500 rounded-lg ml-4 text-stone-800 outline-none pl-2 w-32 sm:w-max"
          placeholder="Todo"
        />
      </label>
      <label className="text-cyan-700">
        <span className="hidden lg:inline">CATEGORIA</span>
        <input
          className="hidden xs:inline border border-stone-500 rounded-lg ml-4 text-stone-800 outline-none pl-2 w-32 sm:w-max"
          placeholder="Todo"
        />
      </label>
    </section>
  )
}
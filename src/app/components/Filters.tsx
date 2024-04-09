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
    <section className="flex pl-16 py-2 bg-cyan-200 gap-32">
      <div>
        <input className="border border-stone-500 rounded-lg ml-4 text-stone-800" name="filter" value={form.filter} onChange={handleChange} />
        <img />
      </div>
      <label className="text-cyan-700">
        MOSTRAR:
        <input className="border border-stone-500 rounded-lg ml-4" />
      </label>
      <label className="text-cyan-700">
        CATEGORIA
        <input className="border border-stone-500 rounded-lg ml-4" />
      </label>
    </section>
  )
}
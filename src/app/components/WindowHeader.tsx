export default function WindowHeader() {
  return (
    <section className="flex justify-between items-center pr-2 bg-blue-500">
      <div className="flex items-center gap-2">
        <img src="/basket.png" alt="canasto" title="canasto" className="bg-blue-800 px-1 py-2 w-14" />
        <h1 className="text-2xl">COMPRAS</h1>
      </div>
      <button className="w-6 h-6 bg-red-600 font-bold rounded-sm">X</button>
    </section>
  )
}
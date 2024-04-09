export default function WindowHeader() {
  return (
    <section className="flex justify-between items-center p-2 pl-0 bg-blue-500">
      <div>
        <img />
        <h1 className="text-2xl">COMPRAS</h1>
      </div>
      <button className="w-6 h-6 bg-red-600 font-bold rounded-sm">X</button>
    </section>
  )
}
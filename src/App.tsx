function App() {
  return (
    <div className="flex flex-col lg:justify-center lg:items-center min-h-screen bg-[#F5F7FD]">
      <div className="flex flex-col lg:flex-row lg:gap-4 bg-white lg:p-4 lg:h-[679px] lg:w-2/4">
        <aside className="bg-red-400 lg:w-64">Aside</aside>
        <main className="bg-green-400 flex-1">Main</main>
      </div>
    </div>
  )
}

export default App

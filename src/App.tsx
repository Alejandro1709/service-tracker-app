import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex flex-col lg:justify-center lg:items-center min-h-screen bg-[#F5F7FD]">
      <div className="flex flex-col lg:flex-row lg:gap-4 lg:p-4 lg:h-[679px] lg:w-2/4">
        <Sidebar />

        <main className="bg-white flex-1 p-4 rounded">
          <div className="">Luz Del Sur</div>
        </main>
      </div>
    </div>
  )
}

export default App

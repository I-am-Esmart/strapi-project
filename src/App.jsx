import { useState } from "react"
import { useGlobalContext } from "./Context"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Submenu from "./Submenu"
import Sidebar from "./Sidebar"

function App() {
  const { isSidebarOpen } = useGlobalContext()
  console.log(isSidebarOpen)

  return (
    <main>
      <Navbar />
      {/* <Hero />dfas */}
      <Sidebar />
      <Submenu />
    </main>
  )
}

export default App

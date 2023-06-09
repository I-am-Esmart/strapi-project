import { useState } from "react"
import { useGlobalContext } from "./Context"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Submenu from "./Submenu"
import Sidebar from "./Sidebar"

function App() {
  const { isSidebarOpen } = useGlobalContext()

  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  )
}

export default App

import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context"
import subLinks from "./data"

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn"></button>
          <FaTimes />
        </button>
        <h2>This is sidebar</h2>
        <h1>sidebar</h1>
      </div>
    </div>
  )
}

export default Sidebar

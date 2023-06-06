import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context"
import subLinks from "./data"

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext()
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>
        <h2>This is sidebar</h2>
      </div>
    </aside>
  )
}

export default Sidebar

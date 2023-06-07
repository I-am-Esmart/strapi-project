import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context"
import subLinks from "./data"

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <div className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button onClick={closeSidebar}>
          <FaTimes className="close-btn" />
        </button>
      </div>
      <ul className="links">
        {subLinks.map((item) => {
          const { links, page, pageId } = item
          console.log(item)
          return (
            <article key={pageId}>
              <h4> {page} </h4>
              <div className="sidebar-sublinks">
                {links.map((link) => {
                  const { id, label, icon, url } = link
                  return (
                    <a key={id} href={url}>
                      {icon}
                      {label}
                    </a>
                  )
                })}
              </div>
            </article>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar

// import { useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../Assets/Images/logo.png";

// export default function Sidebar() {
//   const sidebar = useRef();
//   const sidebarLinks = useRef();
//   const sidebarIcon = useRef();
//   const [isOpen, setIsOpen] = useState(false);

//   function changeStatus() {
//     if (isOpen) {
//       closeSidebar();
//     } else {
//       openSidebar();
//     }
//   }

//   function closeSidebar() {
//     sidebar.current.style.left = `-241.429px`;
//     sidebarIcon.current.classList.replace("fa-xmark", "fa-bars");
//     setIsOpen(false);
//   }

//   function openSidebar() {
//     sidebar.current.style.left = "0px";
//     sidebarIcon.current.classList.replace("fa-bars", "fa-xmark");
//     setIsOpen(true);
//   }

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "auto";
//   }, [isOpen]);

//   return (
//     <>

//       {isOpen && (
//         <div
//           className="sidebar-backdrop"
//           onClick={closeSidebar}
//           style={{
//             position: "fixed",
//             inset: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             zIndex: 998,
//           }}
//         ></div>
//       )}
//       <nav
//         ref={sidebar}
//         className="nav position-fixed top-0 min-vh-100 d-flex flex-nowrap "
//         style={{
//           left: "-241.429px",
//           transition: "left 0.3s ease-in-out",
//           zIndex: 999,
//         }}
//       >
//         <div
//           ref={sidebarLinks}
//           className="links-part p-3 d-flex flex-column justify-content-between"
//         >
//           <div className="links">
//             <ul className="list-unstyled">
//               <li className="p-0 mb-1 pointer">
//                 <NavLink
//                   className="p-2 rounded-2 w-100 d-inline-block"
//                   to={"/"}
//                   onClick={closeSidebar}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="p-0 mb-1 pointer">
//                 <NavLink
//                   className="p-2 rounded-2 w-100 d-inline-block"
//                   to={"/search"}
//                   onClick={closeSidebar}
//                 >
//                   Search
//                 </NavLink>
//               </li>
//               <li className="p-0 mb-1 pointer">
//                 <NavLink
//                   className="p-2 rounded-2 w-100 d-inline-block"
//                   to={"/categories"}
//                   onClick={closeSidebar}
//                 >
//                   Categories
//                 </NavLink>
//               </li>
//               <li className="p-0 mb-1 pointer">
//                 <NavLink
//                   className="p-2 rounded-2 w-100 d-inline-block"
//                   to={"/area"}
//                   onClick={closeSidebar}
//                 >
//                   Area
//                 </NavLink>
//               </li>
//               <li className="p-0 mb-1 pointer">
//                 <NavLink
//                   className="p-2 rounded-2 w-100 d-inline-block"
//                   to={"/ingredients"}
//                   onClick={closeSidebar}
//                 >
//                   Ingredients
//                 </NavLink>
//               </li>
//               <li className="p-0 mb-1 pointer">
//                 <NavLink
//                   className="p-2 rounded-2 w-100 d-inline-block"
//                   to={"/contact"}
//                   onClick={closeSidebar}
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="nav-footer">
//             <div className="icons">
//               <i className="fa-brands fa-facebook"></i>
//               <i className="fa-brands fa-twitter mx-2"></i>
//               <i className="fa-solid fa-globe"></i>
//             </div>
//             <p>Copyright Â© 2019 All Rights Reserved</p>
//           </div>
//         </div>

//         <div className="nav-header bg-white d-flex flex-column justify-content-between py-4 px-1 text-dark text-center">
//           <img src={logo} alt="website logo" />
//           <i
//             ref={sidebarIcon}
//             className="fa-solid fa-bars fs-1 pointer"
//             onClick={changeStatus}
//           ></i>
//           <div>
//             <i className="fa-solid fa-globe d-block"></i>
//             <i className="fa-solid fa-share-nodes"></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/logo.png";

export default function Sidebar() {
  const sidebar = useRef();
  const sidebarLinks = useRef();
  const sidebarIcon = useRef();
  const [isOpen, setIsOpen] = useState(false);

  function changeStatus() {
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }

  function closeSidebar() {
    sidebar.current.style.left = `-241.429px`;
    sidebarIcon.current?.classList.replace("fa-xmark", "fa-bars");
    setIsOpen(false);
  }

  function openSidebar() {
    sidebar.current.style.left = "0px";
    sidebarIcon.current?.classList.replace("fa-bars", "fa-xmark");
    setIsOpen(true);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <div className="d-flex justify-content-between text-dark align-items-center px-3 py-2 bg-white shadow d-md-none position-fixed top-0 w-100 z-3">
        <i className="fa-solid fa-bars fs-3 pointer" onClick={changeStatus}></i>
        <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }} />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={closeSidebar}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
          }}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        ref={sidebar}
        className="nav position-fixed top-0 min-vh-100 d-flex flex-nowrap"
        style={{
          left: "-241.429px",
          transition: "left 0.3s ease-in-out",
          zIndex: 999,
        }}
      >
        {/* Sidebar Links */}
        <div
          ref={sidebarLinks}
          className="links-part p-3 d-flex flex-column justify-content-between"
        >
          <div className="links">
            <ul className="list-unstyled">
              {[
                "/",
                "/search",
                "/categories",
                "/area",
                "/ingredients",
                "/contact",
              ].map((path, index) => (
                <li className="p-0 mb-1 pointer" key={index}>
                  <NavLink
                    className="p-2 rounded-2 w-100 d-inline-block"
                    to={path}
                    onClick={closeSidebar}
                  >
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-footer">
            <div className="icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter mx-2"></i>
              <i className="fa-solid fa-globe"></i>
            </div>
            <p>Copyright © 2019 All Rights Reserved</p>
          </div>
        </div>

        {/* Vertical Sidebar Header (Desktop only) */}
        <div className="nav-header bg-white d-none d-md-flex flex-column justify-content-between py-4 px-1 text-dark text-center">
          <img src={logo} alt="website logo" />
          <i
            ref={sidebarIcon}
            className="fa-solid fa-bars fs-1 pointer"
            onClick={changeStatus}
          ></i>
          <div>
            <i className="fa-solid fa-globe d-block"></i>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

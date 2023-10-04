import React, { useState } from "react";
import SideList from "../Atoms/SideList";
import lightbulbIcon from "../img/lightbulbIcon.svg";
import archiveIcon from "../img/archiveIcon.svg";
import editIcon from "../img/editIcon.svg";
import deleteIcon from "../img/deleteIcon.svg";
import notification from "../img/notificationIcon.svg";

export default function SideBarOne() {
  // const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // const toggleSidebarVisibility = () => {
  //   setIsSidebarVisible(true);
  // };

  return (
    <div className="sidebar">
      <SideList icon={lightbulbIcon} text="Notes" />

      <SideList icon={notification} text="Reminder" />

      <SideList icon={editIcon} text="Edit Labels" />

      <SideList icon={archiveIcon} text="Archive" />

      <SideList icon={deleteIcon} text="Delete" />
    </div>
  );
}

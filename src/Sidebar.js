import React, { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "rooms"), orderBy("name")),
      (snapshot) => {
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRooms = rooms.filter((room) =>
    room.data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="sidebar">
        <div className="sidebar_header">
          <IconButton>
            <Avatar src={user?.photoURL} />
          </IconButton>
          <div className="sidebar_headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchOutlined />
            <input
              type="text"
              placeholder="Search or start new chat"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="sidebar_chats">
          <SidebarChat addNewChat />
          {filteredRooms.map((room) => (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

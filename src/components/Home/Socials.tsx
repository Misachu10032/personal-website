import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import NotificationBubble from "../common/NotificationBubble";
import { useTheme } from "next-themes";

const Socials: React.FC<{ className?: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const { theme } = useTheme(); // Get the current theme

  const handleIconClick = (clipboard: string, type: string) => {
    navigator.clipboard
      .writeText(clipboard)
      .then(() => {
        setOpen(true); // Show the notification bubble
        setNotificationMessage(type);
      })
      .catch((err) => console.error("Failed to copy email: ", err));
  };

  // Define icon color based on theme
  const iconColor = theme === "dark" ? "text-white" : "text-gray-800";
  const hoverColor = theme === "dark" ? "hover:text-gray-400" : "hover:text-gray-600";

  return (
    <div className={`${className} mt-8 flex space-x-6`}>
      <a
        href="https://github.com/Misachu10032"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center space-x-2 ${iconColor} ${hoverColor}`}
      >
        <GitHubIcon />
        <span>GitHub</span>
      </a>
      <button
        onClick={() => handleIconClick("johnzhou.engineer@gmail.com", "Email")}
        className={`flex items-center space-x-2 ${iconColor} ${hoverColor}`}
      >
        <EmailIcon />
        <span>Email</span>
      </button>
      <button
        onClick={() => handleIconClick("john222zl", "Wechat")}
        className={`flex items-center space-x-2 ${iconColor} ${hoverColor}`}
      >
        <img src="/icons/wechat.svg" alt="WeChat" className="w-6 h-6" />
        <span>Wechat</span>
      </button>
      <NotificationBubble
        open={open}
        onClose={() => setOpen(false)}
        message={`${notificationMessage} copied to clipboard!`}
      />
    </div>
  );
};

export default Socials;

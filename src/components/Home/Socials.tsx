import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import {useTranslations} from 'next-intl';
import {useTheme} from 'next-themes';
import React, {useState} from 'react';
import NotificationBubble from '../common/NotificationBubble';
import socialsData from '@/lib/socials.json';

const Socials: React.FC<{className?: string}> = ({className}) => {
  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const {theme} = useTheme(); // Get the current theme
  const t = useTranslations('HomePage.socials');

  const handleIconClick = (clipboard: string, type: string) => {
    navigator.clipboard
      .writeText(clipboard)
      .then(() => {
        setOpen(true); // Show the notification bubble
        setNotificationMessage(type);
      })
      .catch((err) => console.error('Failed to copy email: ', err));
  };

  // Define icon color based on theme
  const iconColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const hoverColor =
    theme === 'dark' ? 'hover:text-gray-400' : 'hover:text-gray-600';

  return (
    <div className={`${className} mt-8 flex space-x-6`}>
      <a
        className={`flex items-center space-x-2 ${iconColor} ${hoverColor}`}
        href={socialsData.GitHub}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GitHubIcon />
        <span>{t('GitHub')}</span>
      </a>
      <button
        className={`flex items-center space-x-2 ${iconColor} ${hoverColor}`}
        onClick={() => handleIconClick(socialsData.Email, t('GitHub'))}
      >
        <EmailIcon />
        <span>{t('Email')}</span>
      </button>
      <button
        className={`flex items-center space-x-2 ${iconColor} ${hoverColor}`}
        onClick={() => handleIconClick(socialsData.WeChat, 'Wechat')}
      >
        <img alt="WeChat" className="h-6 w-6" src="/icons/wechat.svg" />
        <span>{t('Wechat')}</span>
      </button>
      <NotificationBubble
        message={`${notificationMessage} copied to clipboard!`}
        onClose={() => setOpen(false)}
        open={open}
      />
    </div>
  );
};

export default Socials;

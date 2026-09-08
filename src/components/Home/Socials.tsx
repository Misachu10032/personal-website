import React, { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import GitHubIcon from '../common/GitHubIcon';
import NotificationBubble from '../common/NotificationBubble';
import { useTranslations } from 'next-intl';
import socialsData from '@/lib/socials.json';

const Socials: React.FC<{ className?: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const t = useTranslations('HomePage.socials');

  const handleIconClick = (clipboard: string, type: string) => {
    navigator.clipboard.writeText(clipboard).then(() => {
      setOpen(true);
      setNotificationMessage(type);
    });
  };

  const linkClass =
    'flex items-center space-x-2 transition-colors ' +
    'text-neutral-700 hover:text-neutral-500 ' +
    'dark:text-neutral-200 dark:hover:text-neutral-400';

  return (
    <div className={`${className ?? ''} mt-8 flex space-x-6`}>
      <a
        href={socialsData.GitHub}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <GitHubIcon className="h-5 w-5 text-current" />
        <span>{t('GitHub')}</span>
      </a>

      <button
        onClick={() => handleIconClick(socialsData.Email, 'Email')}
        className={linkClass}
      >
        <EnvelopeIcon className="h-5 w-5 text-current" />
        <span>{t('Email')}</span>
      </button>

      <button
        onClick={() => handleIconClick(socialsData.WeChat, 'Wechat')}
        className={linkClass}
      >
        <img src="/icons/wechat.svg" alt="WeChat" className="h-6 w-6" />
        <span>{t('Wechat')}</span>
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

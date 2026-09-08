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
    'flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors ' +
    'text-neutral-500 hover:text-accent ' +
    'dark:text-neutral-400 dark:hover:text-accent';

  return (
    <div className={`${className ?? ''} flex flex-wrap gap-6`}>
      <a
        href={socialsData.GitHub}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <GitHubIcon className="h-4 w-4 text-current" />
        <span>{t('GitHub')}</span>
      </a>

      <button
        onClick={() => handleIconClick(socialsData.Email, 'Email')}
        className={linkClass}
      >
        <EnvelopeIcon className="h-4 w-4 text-current" />
        <span>{t('Email')}</span>
      </button>

      <button
        onClick={() => handleIconClick(socialsData.WeChat, 'Wechat')}
        className={linkClass}
      >
        <img src="/icons/wechat.svg" alt="WeChat" className="h-4 w-4" />
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

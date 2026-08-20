import React from 'react';
import { Link } from 'react-router-dom';

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#004a56] to-[#008196] text-white py-2 px-6 hidden md:flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-center">
      <span className="w-2 h-2 rounded-full bg-[#04aac4] inline-block animate-pulse"></span>
      <span>
        New: AI-scored simulations now available for Sales, Leadership &amp; Difficult Conversations &nbsp;·&nbsp;
      </span>
      <Link
        to="/rehearse"
        className="text-[#c2f0f7] font-extrabold underline underline-offset-2 hover:text-white transition-colors"
      >
        Explore REHEARSE →
      </Link>
    </div>
  );
};

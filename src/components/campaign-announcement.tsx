"use client";

import { useEffect, useRef } from "react";
import { mountAnnouncement } from "../../public/site/announcement.js";

export function CampaignAnnouncement() {
  const bar = useRef<HTMLElement>(null);
  useEffect(() => mountAnnouncement(bar.current), []);

  return (
    <aside ref={bar} className="announcement-bar" aria-label="Breakpoint announcement">
      <div className="announcement-inner">
        <a className="announcement-link" href="/breakpoint#top">
          <span className="announcement-copy">
            <span>Breakpoint · London, 15–17 November</span>
            <span className="announcement-date">25% off with <strong className="announcement-code">SUPERTEAM-6NQP-BP26</strong></span>
          </span>
          <span className="announcement-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </aside>
  );
}

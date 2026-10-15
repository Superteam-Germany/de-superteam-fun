"use client";

import { useEffect, useRef } from "react";
import { mountAnnouncement } from "../../public/site/announcement.js";

export function CampaignAnnouncement() {
  const bar = useRef<HTMLElement>(null);
  useEffect(() => mountAnnouncement(bar.current), []);

  return (
    <aside ref={bar} className="announcement-bar" aria-label="Breakpoint announcement">
      <div className="announcement-inner">
        <a className="announcement-link" href="/breakpoint">
          <span className="announcement-copy">
            <span>Join Superteam Germany at Breakpoint</span>
            <span className="announcement-date">London · 15–17 November</span>
          </span>
          <span className="announcement-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </aside>
  );
}

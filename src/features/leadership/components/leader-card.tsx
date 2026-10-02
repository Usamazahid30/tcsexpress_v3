import { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { useCuratedPageTransition } from "@/components/common";
import { Leader } from "../data/leaders";

interface LeaderCardProps {
  leader: Leader;
}

export function LeaderCard({ leader }: LeaderCardProps) {
  const [imgError, setImgError] = useState(false);
  const { navigateWithTransition } = useCuratedPageTransition();

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if middle click or modifier key is pressed (for standard open in new tab)
    if (e.metaKey || e.ctrlKey || e.button !== 0) return;

    e.preventDefault();
    navigateWithTransition(leader.href, {
      title: leader.name.toUpperCase(),
      subtitle: leader.role,
      type: "doors",
    });
  };

  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-primary/20 bg-card p-3 sm:p-4 shadow-(--shadow-soft) transition-all duration-400 hover:border-primary hover:shadow-(--shadow-elevated) hover:-translate-y-2 dark:border-white/10 dark:hover:border-primary dark:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] dark:hover:shadow-[0_14px_40px_-8px_rgba(237,28,36,0.3)]">
      <Link to={leader.href} onClick={handleCardClick} className="flex flex-col flex-1">
        {/* Photo Container in full natural color with dark-mode depth */}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-muted/30 dark:bg-black/40">
          {!imgError ? (
            <img
              src={leader.image}
              alt={leader.name}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-primary/5 text-primary p-4 dark:bg-primary/10">
              <span className="text-3xl sm:text-4xl font-black tracking-wider opacity-60">
                {leader.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mt-2">
                TCS Leadership
              </span>
            </div>
          )}

          {/* Quick profile indicator badge */}
          <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white/90 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 shadow-xs dark:bg-white/15 dark:text-white dark:border dark:border-white/15">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Name and Designation */}
        <div className="flex flex-col flex-1 items-center justify-between text-center pt-3.5 pb-1">
          <div>
            <h3 className="font-bold text-sm sm:text-base tracking-wider uppercase text-foreground transition-colors duration-200 group-hover:text-primary">
              {leader.name}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
              {leader.role}
            </p>
          </div>
        </div>
      </Link>

      {/* Social / Contact Links Row - Red icons matching reference mockup */}
      {/* <div className="mt-3 pt-3 border-t border-border/50 dark:border-white/10 flex items-center justify-center gap-4 text-primary">
        {leader.socials?.linkedin && (
          <a
            href={leader.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${leader.name} on LinkedIn`}
            className="transition-all duration-200 hover:text-primary-hover hover:scale-120"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {leader.socials?.twitter && (
          <a
            href={leader.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${leader.name} on Twitter`}
            className="transition-all duration-200 hover:text-primary-hover hover:scale-120"
          >
            <Twitter className="h-4 w-4" />
          </a>
        )}
        {leader.socials?.email && (
          <a
            href={leader.socials.email}
            aria-label={`Email ${leader.name}`}
            className="transition-all duration-200 hover:text-primary-hover hover:scale-120"
          >
            <Mail className="h-4 w-4" />
          </a>
        )}
      </div> */}
    </div>
  );
}

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <button
      onClick={item.action}
      className="group relative w-full overflow-hidden rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl border border-white/40 text-left"
    >
      {/* Background Decor */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-soft to-brand-accent opacity-0 transition-opacity duration-500 group-hover:opacity-20 blur-2xl"></div>

      <div className="relative flex items-center justify-between z-10">
        <div className="flex items-center gap-5">
          {/* Icon Container */}
          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110 ${
            item.variant === 'highlight' 
              ? 'bg-brand-dark text-white' 
              : 'bg-brand-soft text-brand-dark'
          }`}>
            {item.icon}
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <h3 className="font-serif text-xl font-medium tracking-wide text-brand-dark group-hover:text-black">
              {item.title}
            </h3>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-brand-muted group-hover:text-brand-accent/80 transition-colors">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Action Arrow & Badge */}
        <div className="flex flex-col items-end gap-2">
          {item.badge && (
            <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-accent ring-1 ring-brand-accent/30">
              {item.badge}
            </span>
          )}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-stone-300 transition-colors duration-300 group-hover:border-brand-dark group-hover:text-brand-dark">
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </button>
  );
};

export default MenuCard;
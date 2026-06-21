'use client';

import { useEffect, useRef, useState } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
}

export default function Dropdown({ options, value, onChange, placeholder = '—', id }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative" id={id}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className={`flex w-full items-center justify-between rounded-xl border bg-neutral-50 px-4 py-3 text-[14px] outline-none transition-colors ${
          open
            ? 'border-orange-400 bg-white ring-2 ring-orange-400/20'
            : 'border-neutral-200 hover:border-neutral-300'
        } ${selected ? 'text-neutral-900' : 'text-neutral-400'}`}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dropdown list */}
      {open && (
        <ul className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg shadow-neutral-200/60">
          {options.map(option => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => { onChange(option.value); setOpen(false); }}
                className={`flex w-full items-center px-4 py-3 text-left text-[14px] transition-colors hover:bg-orange-50 hover:text-orange-600 ${
                  option.value === value ? 'bg-orange-50 font-semibold text-orange-600' : 'text-neutral-700'
                }`}
              >
                {option.value === value && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="mr-2 h-3.5 w-3.5 shrink-0">
                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                  </svg>
                )}
                {option.value !== value && <span className="mr-2 w-3.5" />}
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

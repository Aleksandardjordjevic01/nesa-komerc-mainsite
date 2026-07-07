'use client';

import { useState } from 'react';
import { SPEC_TITLE, type SpecConfig, type SpecLang } from '@/lib/product-specs';

interface Props {
  spec: SpecConfig;
  loc: SpecLang;
}

export default function ProductSpecs({ spec, loc }: Props) {
  const [specGroupKey, setSpecGroupKey] = useState<string>(spec.groups[0].key);

  const groupKey = spec.groups.some((g) => g.key === specGroupKey) ? specGroupKey : spec.groups[0].key;
  const group = spec.groups.find((g) => g.key === groupKey)!;
  const items = spec.data[groupKey];

  return (
    <div>
      {/* Header: title + group toggle */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="h-4 w-[3px] rounded-full bg-gradient-to-b from-orange-500 to-red-600" />
          <h2 className="text-[12px] font-bold uppercase tracking-widest text-neutral-900">
            {SPEC_TITLE[loc]}
          </h2>
        </div>
        {spec.groups.length > 1 && (
          <div className="inline-flex flex-wrap gap-1 self-start rounded-full bg-neutral-100 p-1">
            {spec.groups.map((g) => (
              <button
                key={g.key}
                type="button"
                onClick={() => setSpecGroupKey(g.key)}
                className={`rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold transition-all duration-200 ${
                  groupKey === g.key
                    ? 'bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200'
                    : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                {g.label[loc]}
              </button>
            ))}
          </div>
        )}
      </div>

      {group.caption && (
        <p className="mb-3 text-[11.5px] font-medium text-neutral-500">{group.caption[loc]}</p>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {items.map((it, ri) => (
          <div
            key={ri}
            className="overflow-hidden rounded-2xl ring-1 ring-neutral-200/80 transition-shadow duration-200 hover:shadow-md hover:ring-orange-200"
          >
            {/* Card header - primary attribute (height) */}
            <div className="flex items-end justify-between gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                  {spec.attrCols[0][loc]}
                </p>
                <p className="mt-0.5 text-[22px] font-black leading-none tabular-nums text-neutral-900">
                  {it[0]}
                </p>
              </div>
              <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-orange-500 to-red-600" />
            </div>
            {/* Card body - remaining attributes */}
            <dl className="divide-y divide-neutral-100">
              {spec.attrCols.slice(1).map((col, j) => (
                <div key={j} className="flex items-center justify-between gap-3 px-4 py-2.5">
                  <dt className="text-[11.5px] leading-tight text-neutral-500">{col[loc]}</dt>
                  <dd className="shrink-0 text-[13px] font-semibold tabular-nums text-neutral-900">
                    {it[j + 1]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

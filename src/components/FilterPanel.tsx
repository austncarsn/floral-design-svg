import { Category } from "../lib/design-data";

interface FilterPanelProps {
  categoryFilter: Category;
  onCategoryChange: (category: Category) => void;
  counts: {
    all: number;
    florals: number;
    stems: number;
  };
}

export default function FilterPanel({ categoryFilter, onCategoryChange, counts }: FilterPanelProps) {
  const filters = [
    { value: "all" as const, label: "All Items", count: counts.all },
    { value: "florals" as const, label: "Florals", count: counts.florals },
    { value: "stems" as const, label: "Stems & Sprigs", count: counts.stems },
  ];

  return (
    <div 
      className="mb-12" 
      role="toolbar"
      aria-label="Filter designs by category"
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => onCategoryChange(filter.value)}
            className={`filter-chip ${categoryFilter === filter.value ? "active" : ""}`}
            aria-pressed={categoryFilter === filter.value}
          >
            {filter.label}
            <span 
              className="ml-1.5 text-xs opacity-70"
              aria-label={`${filter.count} designs`}
            >
              {filter.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
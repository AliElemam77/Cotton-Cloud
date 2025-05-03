import { Pagination, PaginationItemType } from "@heroui/react";


export const ChevronIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M15.5 19l-7-7 7-7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default function App() {
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
  }) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button
          key={key}
          className={`${className} bg-gray-200 min-w-8 w-8 h-8`}
          onClick={onNext}
        >
          <ChevronIcon />
        </button>
      );
    }

    if (value === PaginationItemType.PREV) {
      return (
        <button
          key={key}
          className={`${className} bg-gray-200 min-w-8 w-8 h-8`}
          onClick={onPrevious}
        >
          <ChevronIcon className="rotate-180"/>
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return (
        <button key={key} className={`${className} bg-gray-200`}>
          ...
        </button>
      );
    }

    // Default item
    return (
      <button
        key={key}
        ref={ref}
        className={`${className} ${isActive ? " bg-[#CAA34E] font-bold" : ""}`}
        onClick={() => setPage(value)}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
    
      disableCursorAnimation
      showControls
      className="gap-1 overflow-hidden"
      initialPage={1}
      radius="full"
      renderItem={renderItem}
      total={10}
      // variant="light"
    />
  );
}

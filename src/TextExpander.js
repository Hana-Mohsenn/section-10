import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <div className={`text-expander ${className}`}>
      <span>{displayText}</span>

      <button onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

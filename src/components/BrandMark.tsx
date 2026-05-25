interface BrandMarkProps {
  size?: number
}

export function BrandMark({ size = 36 }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        fill="none"
        stroke="currentColor"
      />
      <line
        x1="0.5"
        y1="0.5"
        x2="39.5"
        y2="39.5"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <line
        x1="39.5"
        y1="0.5"
        x2="0.5"
        y2="39.5"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fontSize="12"
        fontFamily="serif"
        fill="currentColor"
        stroke="none"
      >
        BO
      </text>
    </svg>
  )
}

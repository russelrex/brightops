interface LogoProps {
  variant: 'header' | 'footer'
}

export function Logo({ variant }: LogoProps) {
  const src = variant === 'header' ? '/header_logo.png' : '/footer_logo.png'

  return (
    <a href="#top" className={`brandLogo brandLogo--${variant}`}>
      <img src={src} alt="BrightOps Digital" width={220} height={48} />
    </a>
  )
}

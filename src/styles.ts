import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --navy-950: #03131f;
    --navy-900: #061d31;
    --navy-800: #0a2a44;
    --navy-700: #10385a;
    --gold: #f3bb59;
    --gold-soft: rgba(243, 187, 89, 0.18);
    --sage: #86b96b;
    --sage-soft: rgba(134, 185, 107, 0.18);
    --cream: #f5f1e8;
    --ink: #eef4fb;
    --muted: rgba(232, 240, 249, 0.74);
    --line: rgba(255, 255, 255, 0.12);
    --panel: rgba(7, 24, 41, 0.78);
    --panel-soft: rgba(255, 255, 255, 0.04);
    --section-space: clamp(2.5rem, 5vw, 4.5rem);
    --section-space-tight: clamp(1.25rem, 2.5vw, 2rem);
    --card-gap: 18px;
    --shadow:
      rgba(0, 0, 0, 0.22) 0 28px 70px -28px,
      rgba(0, 0, 0, 0.35) 0 18px 32px -20px;

    --sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --display: Georgia, 'Times New Roman', serif;
    --mono: ui-monospace, Consolas, monospace;

    font: 18px/1.55 var(--sans);
    letter-spacing: 0.01em;
    color-scheme: dark;
    color: var(--ink);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 24%),
      linear-gradient(180deg, var(--navy-900) 0%, var(--navy-950) 100%);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (max-width: 1024px) {
    :root {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(180deg, var(--navy-900) 0%, var(--navy-950) 100%);
    color: var(--ink);
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  h1 {
    font-family: var(--display);
    font-size: clamp(3.2rem, 5vw, 5.6rem);
    line-height: 0.94;
    letter-spacing: -0.04em;
    margin: 0;
    color: var(--cream);
  }

  h2 {
    font-family: var(--display);
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.02;
    letter-spacing: -0.03em;
    margin: 0;
    color: var(--cream);
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    line-height: 1.25;
  }

  p {
    margin: 0;
  }
`

export const AppShell = styled.main`
  width: min(1280px, calc(100% - 32px));
  max-width: 100%;
  margin: 0 auto;
  padding-top: 24px;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`

export const SiteHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 22px 0;
  backdrop-filter: blur(14px);
`

export const LogoWordmark = styled.img`
  display: block;
  width: min(520px, 100%);
  height: auto;
`

export const HeaderPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.72rem;
`

export const Hero = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  padding: 40px 0 calc(var(--section-space) - 12px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 24px;
  }
`

export const HeroCopy = styled.div`
  display: grid;
  gap: 16px;
  max-width: 720px;
`

export const HeroHeadline = styled.p`
  margin: 0;
  max-width: 16ch;
  color: var(--cream);
  font-family: var(--display);
  font-size: clamp(1.6rem, 2vw, 2.1rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
`

export const HeroKicker = styled.p`
  margin: 0;
  color: var(--gold);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
`

export const HeroLead = styled.p`
  max-width: 50ch;
  color: var(--muted);
  font-size: 1.05rem;
`

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const HeroSummary = styled.p`
  max-width: 46ch;
  color: var(--muted);
  font-size: 0.98rem;
`

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 650;
  letter-spacing: 0.02em;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background 160ms ease;

  &:hover {
    transform: translateY(-1px);
  }
`

export const PrimaryButton = styled(ButtonLink)`
  background: var(--cream);
  color: var(--navy-950);
  border: 1px solid transparent;
`

export const SecondaryButton = styled(ButtonLink)`
  border: 1px solid var(--line);
  color: var(--ink);
  background: rgba(255, 255, 255, 0.03);
`

export const HeroVisual = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent),
    var(--panel);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
`

export const HeroVisualInner = styled.div`
  display: grid;
  gap: 16px;
  padding: 22px;
  border-radius: 20px;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 45%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
`

export const PortfolioLabel = styled.p`
  margin: 0;
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`

export const PortfolioTitle = styled.p`
  margin: 0;
  color: var(--cream);
  font-family: var(--display);
  font-size: clamp(1.6rem, 2.3vw, 2.3rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
`

export const PortfolioRule = styled.div`
  width: 72px;
  height: 3px;
  border-radius: 999px;
  background: var(--gold);
`

export const PortfolioList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const PortfolioCard = styled.div<{ $featured?: boolean }>`
  grid-column: ${({ $featured }) => ($featured ? '1 / -1' : 'auto')};
  padding: ${({ $featured }) => ($featured ? '16px 16px 14px' : '15px 15px 13px')};
  border-radius: 18px;
  border: 1px solid ${({ $featured }) => ($featured ? 'rgba(243, 187, 89, 0.36)' : 'var(--line)')};
  background:
    ${({ $featured }) =>
      $featured
        ? 'linear-gradient(180deg, rgba(243, 187, 89, 0.12), rgba(255, 255, 255, 0.03))'
        : 'rgba(255, 255, 255, 0.04)'};
  box-shadow: ${({ $featured }) => ($featured ? '0 18px 34px rgba(0, 0, 0, 0.22)' : 'none')};
`

export const PortfolioCardName = styled.p`
  margin: 0;
  color: var(--cream);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const PortfolioCardNote = styled.p`
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.94rem;
`

export const PortfolioMap = styled.div`
  position: relative;
  display: grid;
  gap: 16px;
  min-height: 100%;
`

export const PortfolioStem = styled.div`
  width: 1px;
  height: 100%;
  min-height: 160px;
  justify-self: center;
  background: linear-gradient(180deg, transparent, var(--gold), transparent);
`

export const PortfolioNode = styled.div`
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid rgba(243, 187, 89, 0.28);
  background:
    linear-gradient(180deg, rgba(243, 187, 89, 0.12), rgba(255, 255, 255, 0.03)),
    rgba(255, 255, 255, 0.02);
  color: var(--cream);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
`

export const Section = styled.section<{ $bottomSpace?: boolean }>`
  padding: var(--section-space) 0 ${({ $bottomSpace }) => ($bottomSpace ? 'var(--section-space)' : '0')};
`

export const SectionHeading = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 24px;
`

export const SectionNote = styled.p`
  max-width: 44ch;
  color: var(--muted);
`

export const WhySection = styled.section`
  padding: var(--section-space-tight) 0 0;
`

export const WhyHeading = styled.div`
  display: grid;
  gap: 18px;
  margin-bottom: 24px;

  h2 {
    font-size: clamp(1.8rem, 2.5vw, 2.45rem);
    line-height: 1.04;
  }
`

export const WhyBody = styled.div`
  display: grid;
  gap: 16px;
  max-width: 860px;
  margin-left: clamp(52px, 6vw, 76px);

  @media (max-width: 900px) {
    margin-left: 0;
  }
`

export const WhyLead = styled.p`
  margin: 0;
  color: var(--cream);
  font-family: var(--display);
  font-size: clamp(1.55rem, 2.1vw, 2rem);
  line-height: 1.12;
  letter-spacing: -0.03em;
  max-width: 28ch;
`

export const WhyText = styled.p`
  margin: 0;
  color: var(--muted);
  max-width: 60ch;
`

export const SubsectionHeading = styled.h3`
  margin: 30px 0 0;
  color: var(--cream);
  font-family: var(--display);
  font-size: clamp(1.4rem, 1.8vw, 1.8rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
`

export const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--card-gap);
  margin-top: 18px;
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const PrincipleCard = styled.article`
  display: grid;
  align-content: start;
  gap: 12px;
  height: 100%;
  padding: 24px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.02);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
`

export const PrincipleTitle = styled.h3`
  margin: 0;
  font-family: var(--display);
  font-size: 1.3rem;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--cream);
`

export const ApproachPanel = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
  gap: var(--card-gap);
  margin-top: 8px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const ApproachNarrative = styled.article`
  padding: 26px;
  border-radius: 24px;
  border: 1px solid rgba(243, 187, 89, 0.26);
  background:
    linear-gradient(180deg, rgba(243, 187, 89, 0.12), rgba(255, 255, 255, 0.03)),
    rgba(255, 255, 255, 0.02);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
`

export const ApproachTitle = styled.h3`
  margin: 0;
  font-family: var(--display);
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1.06;
  letter-spacing: -0.03em;
  color: var(--cream);
`

export const ApproachText = styled.p`
  margin-top: 14px;
  color: var(--muted);
  max-width: 62ch;
`

export const ApproachSidebar = styled.div`
  display: grid;
  gap: 16px;
`

export const ApproachNote = styled.article`
  padding: 20px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.02);
`

export const ApproachNoteLabel = styled.p`
  margin: 0 0 8px;
  color: var(--gold);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--card-gap);
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const FeatureCard = styled.article`
  display: grid;
  align-content: start;
  gap: 12px;
  height: 100%;
  padding: 24px;
  border-radius: 22px;
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.02);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
`

export const FeatureEyebrow = styled.p`
  margin: 0;
  color: var(--sage);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

export const FeatureText = styled.p`
  margin-top: 0;
  color: var(--muted);
`

export const VenturesSection = styled.section`
  padding: var(--section-space) 0 0;
`

export const VenturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--card-gap);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const VentureIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`

export const VentureIdentityCopy = styled.div`
  display: grid;
  gap: 6px;
  align-content: center;
`

export const VentureLogo = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  object-fit: contain;
  object-position: center;
  flex: 0 0 auto;
`

export const VentureCard = styled.article<{ $featured?: boolean }>`
  grid-column: ${({ $featured }) => ($featured ? '1 / -1' : 'auto')};
  padding: ${({ $featured }) => ($featured ? '28px' : '22px')};
  border-radius: 24px;
  border: 1px solid ${({ $featured }) => ($featured ? 'rgba(243, 187, 89, 0.34)' : 'var(--line)')};
  background:
    ${({ $featured }) =>
      $featured
        ? 'linear-gradient(180deg, rgba(243, 187, 89, 0.14), rgba(255, 255, 255, 0.035))'
        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))'};
  box-shadow: ${({ $featured }) => ($featured ? '0 18px 34px rgba(0, 0, 0, 0.24)' : '0 10px 40px rgba(0, 0, 0, 0.18)')};
`

export const VentureEyebrow = styled.p`
  margin: 0;
  color: var(--gold);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`

export const VentureTitle = styled.h3<{ $featured?: boolean }>`
  font-family: var(--display);
  font-size: ${({ $featured }) => ($featured ? '1.9rem' : '1.35rem')};
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--cream);
`

export const VentureText = styled.p`
  margin-top: 12px;
  color: var(--muted);
  max-width: 58ch;
`

export const VentureMeta = styled.p`
  margin-top: 12px;
  color: var(--sage);
  font-size: 0.94rem;
  font-weight: 650;
`

export const VentureActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
`

export const VentureLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 650;
  letter-spacing: 0.02em;
  border: 1px solid var(--line);
  color: var(--ink);
  background: rgba(255, 255, 255, 0.03);
`

export const VentureLinkDisabled = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(238, 244, 251, 0.5);
  background: rgba(255, 255, 255, 0.02);
`

export const VentureDetailPanel = styled.article`
  margin-top: 22px;
  padding: 24px;
  border-radius: 24px;
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.02);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.18);
`

export const Footer = styled.footer`
  margin-top: auto;
  padding: clamp(1.75rem, 3vw, 2.75rem) 0 24px;
  border-top: 1px solid var(--line);
`

export const FooterBar = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  gap: 24px 56px;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
  }
`

export const FooterBrand = styled.div`
  display: block;

  @media (max-width: 767px) {
    text-align: center;
  }
`

export const FooterMark = styled.img`
  display: block;
  width: clamp(285px, 28vw, 400px);
  max-width: 100%;
  height: auto;
  object-fit: contain;
  object-position: left center;
  flex: 0 0 auto;

  @media (max-width: 767px) {
    object-position: center;
    margin-inline: auto;
  }
`

export const FooterSmall = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 0.88rem;

  @media (max-width: 767px) {
    text-align: center;
  }
`

export const FooterSubfooter = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 767px) {
    text-align: center;
  }
`

export const FooterNav = styled.nav`
  display: grid;
  gap: 18px;
  align-items: flex-start;
  justify-self: end;
  transform: translateX(-10%);

  @media (max-width: 1024px) {
    transform: none;
  }

  @media (max-width: 767px) {
    justify-self: center;
  }
`

export const FooterNavGroup = styled.div`
  display: grid;
  gap: 10px;

  @media (max-width: 767px) {
    justify-items: center;
  }
`

export const FooterNavLabel = styled.p`
  margin: 0;
  color: var(--muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

export const FooterNavList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const FooterNavLink = styled.a`
  color: var(--ink);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.02em;

  &:hover {
    color: var(--cream);
  }
`

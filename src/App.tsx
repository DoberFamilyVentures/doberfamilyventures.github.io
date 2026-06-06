import {
  AppShell,
  ApproachNarrative,
  ApproachText,
  ApproachTitle,
  ButtonRow,
  FeatureCard,
  FeatureEyebrow,
  FeatureGrid,
  FeatureText,
  Footer,
  FooterBar,
  FooterBrand,
  FooterMark,
  FooterNav,
  FooterNavGroup,
  FooterNavLabel,
  FooterNavList,
  FooterNavLink,
  FooterSmall,
  FooterSubfooter,
  GlobalStyle,
  HeaderPill,
  Hero,
  HeroCopy,
  HeroHeadline,
  HeroLead,
  HeroSummary,
  HeroVisual,
  HeroVisualInner,
  PrimaryButton,
  PortfolioCard,
  PortfolioCardName,
  PortfolioCardNote,
  PortfolioLabel,
  PortfolioList,
  PortfolioMap,
  PortfolioRule,
  PortfolioTitle,
  Section,
  SectionHeading,
  PrincipleCard,
  PrincipleTitle,
  PrinciplesGrid,
  SubsectionHeading,
  VentureActions,
  VentureCard,
  VentureEyebrow,
  VentureIdentity,
  VentureIdentityCopy,
  VentureLink,
  VentureLogo,
  VentureText,
  VenturesGrid,
  VenturesSection,
  VentureTitle,
  WhyBody,
  WhyHeading,
  WhyLead,
  WhySection,
  WhyText,
} from './styles'

const PORTFOLIO_LINKS = {
  maintley: {
    href: 'https://www.maintleyapp.com',
    external: true,
  },
  familyEconomy: {
    href: 'https://doberfamilyventures.github.io/FamilyEconomy/',
    external: true,
  },
} as const

function App() {
  return (
    <AppShell>
      <GlobalStyle />
      <div id="top">
        <section>
          <HeaderPill>Family owned | Operating company</HeaderPill>
          <Hero>
            <HeroCopy>
              <h1>Dober Family Ventures</h1>
              <HeroHeadline>Building businesses that strengthen households.</HeroHeadline>
              <HeroLead>
                We build practical businesses that help households operate with greater clarity,
                responsibility, and confidence over the long term.
              </HeroLead>
              <ButtonRow>
                <PrimaryButton href="#ventures">Explore ventures</PrimaryButton>
              </ButtonRow>
            </HeroCopy>
            <HeroVisual>
              <HeroVisualInner>
                <PortfolioLabel>Portfolio family</PortfolioLabel>
                <PortfolioTitle>Businesses built for the long term.</PortfolioTitle>
                <HeroSummary>
                  One operating business, one in development, and a shared commitment to stronger
                  households.
                </HeroSummary>
                <PortfolioRule />
                <PortfolioMap aria-label="Portfolio overview">
                  <PortfolioList>
                    <PortfolioCard $featured>
                      <PortfolioCardName>Maintley</PortfolioCardName>
                      <PortfolioCardNote>Operating venture</PortfolioCardNote>
                    </PortfolioCard>
                    <PortfolioCard $featured>
                      <PortfolioCardName>Family Economy</PortfolioCardName>
                      <PortfolioCardNote>In development</PortfolioCardNote>
                    </PortfolioCard>
                  </PortfolioList>
                </PortfolioMap>
              </HeroVisualInner>
            </HeroVisual>
          </Hero>
        </section>

        <div id="about">
        <WhySection id="why">
          <WhyHeading>
            <h2>Why DFV exists</h2>
          </WhyHeading>

          <WhyBody>
            <WhyLead>
              Dober Family Ventures exists to build practical businesses that strengthen
              households by solving real-world problems.
            </WhyLead>
            <WhyText>
              Rather than chasing trends, we focus on products and services that help households
              operate with greater clarity, responsibility, and confidence over the long term.
            </WhyText>
          </WhyBody>
        </WhySection>

        <Section id="portfolio">
          <SectionHeading>
            <h2>What we build</h2>
          </SectionHeading>

          <FeatureGrid>
            <FeatureCard>
              <FeatureEyebrow>Practical solutions</FeatureEyebrow>
              <h3>We build useful businesses that solve recurring household problems.</h3>
              <FeatureText>
                We look for work that matters in ordinary life and keeps proving its value over
                time.
              </FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureEyebrow>Stronger households</FeatureEyebrow>
              <h3>We focus on tools that help families operate with greater confidence and clarity.</h3>
              <FeatureText>
                The best ventures reduce friction, support responsibility, and make everyday
                household life easier to navigate.
              </FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureEyebrow>Durable systems</FeatureEyebrow>
              <h3>We favor durable solutions that create value for years, not trends that fade quickly.</h3>
              <FeatureText>
                We build systems designed to remain useful, trusted, and relevant over time.
              </FeatureText>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <VenturesSection id="ventures">
          <SectionHeading>
            <h2>Our ventures</h2>
          </SectionHeading>

          <VenturesGrid>
            <VentureCard id="maintley">
              <VentureIdentity>
                <VentureLogo src="/maintley.png" alt="Maintley logo" />
                <VentureIdentityCopy>
                  <VentureEyebrow>Operating venture</VentureEyebrow>
                  <VentureTitle>Maintley</VentureTitle>
                </VentureIdentityCopy>
              </VentureIdentity>
              <VentureText>
                Home maintenance and household organization.
              </VentureText>
              <VentureText>
                Track maintenance, assets, recurring care, and the complete history of your home
                in one place.
              </VentureText>
              <VentureActions>
                <VentureLink
                  href={PORTFOLIO_LINKS.maintley.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Maintley
                </VentureLink>
              </VentureActions>
            </VentureCard>

            <VentureCard id="family-economy">
              <VentureIdentity>
                <VentureLogo src="/familyeconomy.png" alt="Family Economy logo" />
                <VentureIdentityCopy>
                  <VentureEyebrow>Venture in development</VentureEyebrow>
                  <VentureTitle>Family Economy</VentureTitle>
                </VentureIdentityCopy>
              </VentureIdentity>
              <VentureText>
                Building responsibility, habits, and financial confidence together.
              </VentureText>
              <VentureText>
                A household system for teaching responsibility, earning, saving, and financial
                decision-making before real-world consequences arrive.
              </VentureText>
              <VentureActions>
                <VentureLink
                  href={PORTFOLIO_LINKS.familyEconomy.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Family Economy Preview
                </VentureLink>
              </VentureActions>
            </VentureCard>
          </VenturesGrid>
        </VenturesSection>

        <Section id="approach" $bottomSpace>
          <SectionHeading>
            <h2>Our approach</h2>
          </SectionHeading>

          <ApproachNarrative>
            <ApproachTitle>
              We try to build the kind of businesses a family would be proud to own for decades.
            </ApproachTitle>
            <ApproachText>
              That means choosing practical problems, building reliable systems, and staying close
              to the day-to-day reality of the households we serve.
            </ApproachText>
            <ApproachText>
              We are less interested in noise, hype, and forced growth than we are in trust,
              consistency, and work that keeps getting more useful over time.
            </ApproachText>
          </ApproachNarrative>

          <SubsectionHeading>How we build</SubsectionHeading>
          <PrinciplesGrid>
            <PrincipleCard>
              <FeatureEyebrow>Solve real problems</FeatureEyebrow>
              <PrincipleTitle>We start with work that is genuinely useful in ordinary life.</PrincipleTitle>
              <FeatureText>
                If the problem is real, the value should be clear early and stay relevant over
                time.
              </FeatureText>
            </PrincipleCard>
            <PrincipleCard>
              <FeatureEyebrow>Build for consistency</FeatureEyebrow>
              <PrincipleTitle>Strong systems make useful work easier to repeat, improve, and trust.</PrincipleTitle>
              <FeatureText>
                Consistency and clarity make businesses easier to run and households easier to
                serve well.
              </FeatureText>
            </PrincipleCard>
            <PrincipleCard>
              <FeatureEyebrow>Start at home</FeatureEyebrow>
              <PrincipleTitle>The work should show up where daily life actually happens.</PrincipleTitle>
              <FeatureText>
                We care most about businesses that make life at home clearer, steadier, and easier
                to navigate.
              </FeatureText>
            </PrincipleCard>
            <PrincipleCard>
              <FeatureEyebrow>Earn trust slowly</FeatureEyebrow>
              <PrincipleTitle>We would rather build durable trust over time than chase quick attention.</PrincipleTitle>
              <FeatureText>
                Long-term stewardship means staying useful, dependable, and relevant through
                seasons of change.
              </FeatureText>
            </PrincipleCard>
          </PrinciplesGrid>
        </Section>
        </div>
      </div>

      <Footer>
        <FooterBar>
          <FooterBrand>
            <FooterMark src="/transparentlogo.png" alt="Dober Family Ventures logo" />
          </FooterBrand>
          <FooterNav aria-label="Footer navigation">
            <FooterNavGroup>
              <FooterNavLabel>Ventures</FooterNavLabel>
              <FooterNavList>
                <FooterNavLink
                  href={PORTFOLIO_LINKS.maintley.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Maintley
                </FooterNavLink>
                <FooterNavLink
                  href={PORTFOLIO_LINKS.familyEconomy.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Family Economy
                </FooterNavLink>
              </FooterNavList>
            </FooterNavGroup>
            <FooterNavGroup>
              <FooterNavLabel>Company</FooterNavLabel>
              <FooterNavList>
                <FooterNavLink href="#about">About DFV</FooterNavLink>
                <FooterNavLink href="mailto:doberfamilyventures@gmail.com">Contact</FooterNavLink>
              </FooterNavList>
            </FooterNavGroup>
          </FooterNav>
        </FooterBar>
        <FooterSubfooter>
          <FooterSmall>Copyright 2026 Dober Family Ventures | Family-owned operating company</FooterSmall>
        </FooterSubfooter>
      </Footer>
    </AppShell>
  )
}

export default App

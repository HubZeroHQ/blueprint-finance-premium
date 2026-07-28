import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/shared/Reveal";

interface PageIntroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <Container>
        <Reveal className="page-intro-content">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          <p className="page-intro-description">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}

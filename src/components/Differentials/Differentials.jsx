import styles from './Differentials.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const DIFFERENTIALS = [
  {
    title: 'Nos ocupamos de principio a fin',
    description:
      'Abordamos cada etapa: análisis, diseño, desarrollo y QA, asegurando un resultado coherente y alineado a tus objetivos.'
  },
  {
    title: 'Pensamos en soluciones, no solo en código',
    description:
      'Entendemos el problema de negocio y proponemos alternativas reales para optimizar recursos y reducir costos.'
  },
  {
    title: 'Escalamos contigo',
    description:
      'Diseñamos arquitecturas modulares y cloud‑ready que crecen junto a tu empresa sin reescrituras dolorosas.'
  },
  {
    title: 'Somos aliados, no proveedores',
    description:
      'Trabajamos codo a codo, transformando desafíos en oportunidades digitales que impactan de verdad.'
  }
];

export default function Differentials() {
  const revealRef = useScrollReveal('scaleIn');

  return (
    <section ref={revealRef} id="differentials" className={styles.differentials}>
      <h2 className={styles.title}>¿Qué nos hace diferentes?</h2>
      <div className={styles.list}>
        {DIFFERENTIALS.map(({ title, description }) => (
          <div className={styles.item} key={title}>
            <h3 className={styles.itemTitle}>{title}</h3>
            <p className={styles.itemDesc}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

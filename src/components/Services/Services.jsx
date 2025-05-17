import styles from './Services.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// 👉 Lista de servicios (puedes editar los textos o añadir iconos SVG)
const SERVICES = [
  {
    title: 'Desarrollo web y de aplicaciones a medida',
    description:
      'Aplicaciones rápidas, escalables y 100% alineadas con las necesidades de tu negocio.'
  },
  {
    title: 'Análisis de datos, inteligencia de negocio y optimización de procesos',
    description:
      'Convertimos tus datos en decisiones accionables para reducir costos y maximizar ingresos.'
  },
  {
    title: 'Testing QA y mejora continua de productos digitales',
    description:
      'Automatizamos pruebas y aseguramos la calidad para que tu producto sea robusto y confiable.'
  },
  {
    title: 'Asesoramiento funcional y gestión de proyectos tecnológicos',
    description:
      'Te guiamos en estrategia, alcance y roadmap para que cada sprint sume valor real.'
  },
  {
    title: 'Prevención de riesgos técnicos y acompañamiento post‑lanzamiento',
    description:
      'Mantenimiento proactivo y soporte cercano para que tu solución crezca sin sorpresas.'
  },
  {
    title: 'Escalabilidad garantizada',
    description:
      'Arquitecturas modulares y cloud‑ready que acompañan el crecimiento de tu empresa.'
  }
];

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} id="services" className={styles.services}>
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <div className={styles.grid}>
        {SERVICES.map(({ title, description }) => (
          <article className={styles.card} key={title}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import styles from './Services.module.css';
import analyticsIcon from '../../assets/svg/analytics.svg';
import htmlIcon from '../../assets/svg/html.svg';
import scalabilityIcon from '../../assets/svg/scalability.svg';
import testingIcon from '../../assets/svg/test.svg';
import strategyIcon from '../../assets/svg/strategy.svg';
import maintenanceIcon from '../../assets/svg/maintenance.svg';
import Squares from '../About/Squares';

const SERVICES = [
  {
    icon: htmlIcon,
    title: 'Desarrollo de aplicaciones a medida',
    description:
      'Aplicaciones rápidas, escalables y 100% alineadas con las necesidades de tu negocio.'
  },
  {
    icon: analyticsIcon,
    title: 'Análisis de datos y optimización de procesos',
    description:
      'Convertimos tus datos en decisiones accionables para reducir costos y maximizar ingresos.'
  },
  {
    icon: testingIcon,
    title: 'Testing QA y automatización',
    description:
      'Automatizamos pruebas y aseguramos la calidad para que tu producto sea robusto y confiable.'
  },
  {
    icon: strategyIcon,
    title: 'Asesoramiento y gestión de proyectos',
    description:
      'Te guiamos en estrategia, alcance y roadmap para que cada sprint sume valor real.'
  },
  {
    icon: maintenanceIcon,
    title: 'Acompañamiento post‑lanzamiento',
    description:
      'Mantenimiento proactivo y soporte cercano para que tu solución crezca sin sorpresas.'
  },
  {
    icon: scalabilityIcon,
    title: 'Escalabilidad garantizada',
    description:
      'Arquitecturas modulares y cloud‑ready que acompañan el crecimiento de tu empresa.'
  }
];

export default function Services() {

  return (
    <>
      <Squares
        speed={0.5}
        squareSize={40}
        direction='diagonal'
        borderColor='#edededff'
        hoverFillColor='#edededff'
      />
      <section id="services" className={styles.services}>
        <h2 className={styles.title}>Nuestros Servicios</h2>
        <div className={styles.grid}>
          {SERVICES.map(({ icon, title, description }) => (
            <article className={styles.card} key={title}>
              <img
                className={styles.cardIcon}
                src={icon}
                alt={title}
              />
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

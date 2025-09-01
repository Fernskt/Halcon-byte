import styles from './Hero.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import DecryptedText from './DecryptedText';
import GlitchText from './GlitchText';


export default function Hero() {
  const ref = useScrollReveal();

  return (
    <header className={styles.hero}>
      <div>
        <GlitchText
          speed={3}
          enableShadows={false}
          enableOnHover={false}
          className={styles.heading}
        >
          HawkByte!
        </GlitchText>
        
        <DecryptedText
          text="Tu aliado tecnológico."
          speed={100}
          maxIterations={25}
          characters="ABCD1234!?"
          className={styles.heading2}
          parentClassName={styles.heading2}
          encryptedClassName="encrypted"
          animateOn="view"
          revealDirection="end"
        />
        <br />
        <DecryptedText
          text="En HawkByte creamos soluciones integrales pensadas para hacer crecer tu empresa."
          speed={100}
          maxIterations={25}
          characters="ABCD1234!?#$%"
          className={styles.description}
          parentClassName={styles.description}
          encryptedClassName="encrypted"
          animateOn="view"
          revealDirection="end"
        />
      </div>
      <a className={styles.cta} href="#contact">¡Contáctanos!</a>
    </header>
  );
}

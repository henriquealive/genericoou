import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>💊 Genérico<strong>Ou</strong></span>
          <p className={styles.tagline}>
            Compare medicamentos de referência e genéricos no Brasil com informações baseadas na ANVISA.
          </p>
        </div>

        <nav className={styles.links} aria-label="Links do rodapé">
          <Link href="/medicamentos/">Todos os Medicamentos</Link>
          <Link href="/como-funciona-generico/">Como Funciona o Genérico</Link>
          <Link href="/sobre/">Sobre o GenéricoOu</Link>
          <Link href="/privacidade/">Política de Privacidade</Link>
        </nav>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>
            © {year} GenéricoOu. Informações de caráter educativo — consulte sempre um farmacêutico ou médico antes de substituir medicamentos.
          </p>
        </div>
      </div>
    </footer>
  );
}

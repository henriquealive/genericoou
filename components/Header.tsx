import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="GenéricoOu — Página inicial">
          <span className={styles.logoIcon} aria-hidden="true">💊</span>
          <span>
            Genérico<strong>Ou</strong>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação principal">
          <Link href="/medicamentos/" className={styles.navLink}>
            Todos os Medicamentos
          </Link>
          <Link href="/como-funciona-generico/" className={styles.navLink}>
            Como Funciona
          </Link>
          <Link href="/sobre/" className={styles.navLink}>
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

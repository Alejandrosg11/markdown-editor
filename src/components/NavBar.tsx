import React from 'react';
import styles from '../styles/NavBar.module.scss';
import Image from 'next/image';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navBar}>
        <div className={styles.leftSection}>
            <div className={styles.menuContainer}>
                <Image src="/assets/icon-menu.svg" alt="Menu" width={32} height={18} />
            </div>
            <div className={styles.logoContainer}>
                <Image className={styles.logo} src="/assets/logo.svg" alt="Logo" width={131} height={12} />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.docName}>
                <Image src="/assets/icon-document.svg" alt="Search" width={13} height={16} />
                <div className={styles.docNameText}>
                    <span className={styles.documentName}>Document Name</span>
                    <span className={styles.documentName}>welcome.md</span>
                </div>
            </div>
        </div>
        <div className={styles.rightSection}>
            <Image src="/assets/icon-delete.svg" alt="Delete" width={18} height={20} />
            <button className={styles.saveButton}>
                <Image src="/assets/icon-save.svg" alt="Delete" width={16} height={16} />
                Save Changes
            </button>
        </div>
    </nav>
  );
};

export default NavBar;
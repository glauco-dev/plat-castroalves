import { Popover } from 'antd';
import styles from '../Home.module.css';

export default () => (
    <div className={styles.hero}>
        <img
            src="/hero/2.png"
            alt="Educandário Castro Alves"
            className={styles.heroImage}
        />
        <div className={styles.heroText}>
            <h1>Bem-vindo ao Educandário Castro Alves</h1>
        </div>
        <Popover content={"entrar em contato"} title="Olha o ZAP ♪" trigger="hover">
            <a href="https://w.app/wIOaZq" className={styles.contactAction}><img src="/contato action b.png" alt="" /></a>
        </Popover>
    </div>
)
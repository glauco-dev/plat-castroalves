import { Popover } from 'antd';
import styles from '../Home.module.css';
import { useEffect, useState } from 'react';

export default () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
            setTimeout(() => {setOpen(false)}, 2500)
        }, 2500)
    },[])
    return (
    <div className={styles.hero}>
        <img
            src="/hero/2.png"
            alt="Educandário Castro Alves"
            className={styles.heroImage}
        />
        <div className={styles.heroText}>
            <h1>Bem-vindo ao Educandário Castro Alves</h1>
        </div>
        <Popover open={open} content={"entre em contato"} title="Olha o ZAP ♪" trigger="hover">
            <a target="_blank" href="https://w.app/wIOaZq" className={styles.contactAction}><img src="/contato action b.png" alt="" /></a>
        </Popover>
    </div>
)}
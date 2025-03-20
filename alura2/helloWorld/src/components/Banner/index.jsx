import { useState, useEffect } from 'react';
import circuloColorido from '../../assets/circulo_colorido.png';
import styles from './Banner.module.css';

export const Banner = () => {

    const [aboutMe, setAboutMe] = useState('')

    useEffect(() => { fetch('https://api.github.com/users/joaovictor-jpg').then(result => result.json()).then(data => setAboutMe(data)) }, [])

    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1>{aboutMe.name}</h1>
                <p className={styles.paragrafro}>
                    {aboutMe.bio}
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} src={aboutMe.avatar_url} alt="Foto do João Victor" />
            </div>
        </div>
    )
}
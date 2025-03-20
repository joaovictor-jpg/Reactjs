import styles from './About.module.css'
import { PostModelos } from "../../components/PostModelo"
import capa from '../../assets/capa.png'
import { useEffect, useState } from 'react'

const About = () => {
    const [aboutMe, setAboutMe] = useState('')

    useEffect(() => { fetch('https://api.github.com/users/joaovictor-jpg').then(result => result.json()).then(data => setAboutMe(data)) }, [])
    return (
        <PostModelos
            fotoCapa={capa}
            titulo="Sobre Min"
        >
            <h3 className={styles.subtitulo}>
                Hello world
            </h3>
            <img className={styles.fotoSobreMim} src={aboutMe.avatar_url} alt="Foto de João victor" />
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laborum veniam beatae quaerat iste reiciendis ut officiis, exercitationem aspernatur quis omnis soluta cupiditate iusto nulla! Qui impedit voluptate molestias pariatur?</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus optio asperiores omnis ipsum nisi dolores quisquam quas qui! Odio perspiciatis delectus maiores vel cupiditate, dolor possimus omnis aspernatur nostrum molestiae.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere nisi fugiat quis iusto quidem esse consequuntur excepturi, aliquid consectetur iste corrupti nobis rem, temporibus dicta provident adipisci porro. Tempora!</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum asperiores facere magnam possimus suscipit sint praesentium mollitia error beatae ducimus officia esse nulla nihil, unde qui et. Qui, pariatur!</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nobis possimus. Asperiores enim dolorum commodi tempore expedita eius fugiat ipsa sint impedit soluta! Libero fugit error incidunt id enim culpa.</p>
            <p className={styles.paragrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, maiores recusandae reiciendis ipsa ut quam. Beatae quia, natus, quos eum sint aliquid voluptas harum delectus soluta sed facilis autem earum!</p>
            <p className={styles.paragrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, maiores recusandae reiciendis ipsa ut quam. Beatae quia, natus, quos eum sint aliquid voluptas harum delectus soluta sed facilis autem earum!</p>
            <p className={styles.paragrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, maiores recusandae reiciendis ipsa ut quam. Beatae quia, natus, quos eum sint aliquid voluptas harum delectus soluta sed facilis autem earum!</p>
            <p className={styles.paragrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, maiores recusandae reiciendis ipsa ut quam. Beatae quia, natus, quos eum sint aliquid voluptas harum delectus soluta sed facilis autem earum!</p>
            <p className={styles.paragrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, maiores recusandae reiciendis ipsa ut quam. Beatae quia, natus, quos eum sint aliquid voluptas harum delectus soluta sed facilis autem earum!</p>
            <p className={styles.paragrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, maiores recusandae reiciendis ipsa ut quam. Beatae quia, natus, quos eum sint aliquid voluptas harum delectus soluta sed facilis autem earum!</p>
        </PostModelos>
    )
}

export default About
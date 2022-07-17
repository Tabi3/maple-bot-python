/* eslint-disable @next/next/no-img-element */
import card_styles from '../styles/Khub/KhubCard.module.css'


export default function KhubCard(props) {
    return <a className={card_styles.card_link} href={props.href}>
        <div className={card_styles.card}>
            <img src={props.img_src} alt="img_src" />
            <div className={card_styles.maindiv}>
                <p>{props.description}</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '0.5rem', height: '4rem'}}>
                <div style={{ display: 'flex', flexDirection: 'row', height: '2rem', position:'absolute', gap: '0.5rem' }}>
                    {props.authors.map(i =>
                        <img src={i.pfp}
                            title={i.name}
                            key={i.name}
                            alt='pfp'
                            style={{height: '2rem', width:'2rem', borderRadius: '100%'}}
                        />)}
                </div>
                <h3 style={{ marginTop: '2rem', color: '#555'}}>{props.name}</h3>
            </div>
        </div>
    </a>
}
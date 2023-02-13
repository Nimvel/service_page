import s from './Clients.module.scss'

const Clients = () => {
    return (
        <div className={s.clients}>
            <h1>clients</h1>
            <div className={s.columns}>
                <div className={s.img_4_1} />
                <div className={s.img_4_2} />
                <div className={s.img_4_3} />
                <div className={s.img_4_4} />
                <div className={s.img_4_5} />
                <div className={s.img_4_6} />
                <div className={s.img_4_7} />
                <div className={s.img_4_8} />
            </div>
        </div>
    )
}

export default Clients
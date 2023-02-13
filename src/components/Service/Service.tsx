import s from './Service.module.scss'

const Column = () => {
    return (
        <div className={s.block}>

                <div className={s.img_2} />
                <h2>web development</h2>
                <p>
                    We provide the best world class web
                    development service We provide the best world
                    class web development service
                </p>
                <button>more details</button>
            </div>

    )
}

const Service = () => {
    return (
        <div className={s.service}>
            <h1>our services</h1>
            <div className={s.columns}>
            <Column />
            <Column />
            <Column />
            </div>
            
        </div>
    )
}

export default Service
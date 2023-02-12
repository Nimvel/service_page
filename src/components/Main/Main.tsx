import s from './Main.module.scss'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.background} />

            <div className={s.header}>
                <div className={s.logo}/>

                <div className={s.navbar}>
                    <span>Home</span>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Shop</span>
                    <span>Contact</span>
                    <span>Pages</span>
                </div>

                <div>

                </div>
            </div>

            <div className={s.block}>
                <h1>the best services</h1>
                <p>We provide the best services in the world We provide the best services in the world We provide the best services in the world</p>
                <button>hire us</button>
            </div>
        </div>
    )
}

export default Main
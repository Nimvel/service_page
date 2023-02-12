import s from './About.module.scss'

const About = () => {
    return (
        <div className={s.about}>
            <div className={s.img_1} />

            <div className={s.block}>
                <h2>a little about us</h2>
                <p>
                    We are a company based in india with the motto “Digitalally Designed India”.
                    We are a company based in india with the motto “Digitalally Designed India”.
                    We are a company based in india with the motto “Digitalally Designed India”.
                </p>

                <p>
                    We are a company based in india with the motto “Digitalally Designed India”.
                    We are a company based in india with the motto “Digitalally Designed India”.
                    We are a company based in India with the motto “Digitalally Designed India”.
                    We are a company based in india with the motto “Digitalally Designed India”.
                </p>
                <button>read more details</button>
            </div>
        </div>
    )
}

export default About
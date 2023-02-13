import s from './Feedback.module.scss'

const Column = (props: any) => {
    return (
        <div>
            <div className={s[props.img]} />
            <div className={s.block}>
                    <p>OI</p>
                    <p className={s.name}>Imran Khan <br/>
                        CEO, Vesso</p>
            </div>
        </div>
    )
}

const Feedback = () => {
    return (
        <div className={s.feedback}>
            <h1>feedback</h1>
            <div className={s.columns}>
                <div className={s.column_1}>
                    <p>It was always a pleasure
                        doing bussiness with them.
                        I love the quality of work.</p>
                    <span>1/10</span>
                </div>
                <Column img={'img_3_1'} />
                <Column img={'img_3_2'} />
                <Column img={'img_3_3'} />
            </div>
        </div>
    )
}

export default Feedback
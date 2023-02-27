import style from '../../styles/Circle.module.css'
export default function Circle(props){
    const {h,color} = props
    const b = h/2
    return(
        <div className={style.CircleEffect} style={{height: `${h}em`,width:`${h}em`, bottom:`-${b}em`,left:`calc(50% - ${b}em)`,background:color,filter:'blur(1em)'}}>

        </div>
    )
}
import styles from '../style';
import { arrowUp } from '../assets';

//to do: fix the color background on hover

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] 
    rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:w-[180px] hover:h-[180px]`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%]
        rounded-full`}>

            <div className={`${styles.flexStart} flex-row`}>
            <p className='"font-poppins font-medium text-[18px] leading-[23px]'>
                <span className="text-gradient">Get</span>
                
            </p>
            <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
            </div>
            <p className='"font-poppins font-medium text-[18px] leading-[23px]'>
                <span className="text-gradient">Started</span>
            </p>

        </div>

    </div>
)


export default GetStarted
import { clients } from '../constants';
import styles from "../style"

//I made the image glow a little bit when you hover over it, but I need to make it glow a little more, I'll try make it better later
 const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full `}>
       {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain hover:contrast-0 cursor-pointer" />
        </div>
       ))}
    </div>
  </section>

 )
 
 export default Clients
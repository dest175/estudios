import { CustomDescription } from "./CustomDescription"
import { CustomName } from "./CustomName"
import { CustomImg } from "./CustonImg"

export const CustomAvatar = ({className, name,img,description,ss
})=>{
    return(
        <div className={`custom-avatar ${className}`} >
            <CustomImg   img={img}/>
            <div className="avatar-info">
            <CustomName className="avatar-name"  name={name}/>
            <CustomDescription className="avatar-description" description={description}/>
            </div>
        </div>
    )
}
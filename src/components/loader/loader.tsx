import { FunctionComponent } from "react"
import PhotoLoader from '../../assets/img/logo/loder.png'
const Loader: FunctionComponent = () => {
    
  return (
    <> 
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        <img src={PhotoLoader} alt=""/>
                    </div>
                </div>
            </div>
        </div>  
    </>
  )
}

export default Loader

import './Downlod_file_popup.css'

import close1 from './assets/close1.png'

function Downlod_file_popup(props) {

    
    return (
        <>
            <div className='overlay'></div>
            <div className='Downdload_file_popup_main'>
                <img src={close1} className='close' onClick={()=>{props.setshow_Downlod_popup(false)}}/>

                <div className='top_img'></div>
                <div className='Downdload_file_popup_text'>אישור להורדת תמונה</div>
            </div>
        </>
    );

}
export default Downlod_file_popup;

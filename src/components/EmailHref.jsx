import { useState } from 'react';
import copy from 'clipboard-copy';

import '../css/emailhref.css';

function EmailHref(props) {
    const email = "eric.terrisson@gmail.com";
    const [textButton, setTextButton] = useState(email);
    const { lock } = props;
    
    const handleClic = () => {
        copy(email);
        setTextButton("Copié dans votre presse-papier");
        setTimeout(() => {
            // Ce code s'exécutera après un délai de 3 secondes
            setTextButton(email);
          }, 2000);
    };

    return (
        !lock ? (
            <button className='emailhref_button' onClick={handleClic}>
                <span>{textButton}</span>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0908 20.3164H20.3633C22.042 20.3164 23.1582 19.3936 23.1582 17.4248V9.13672H18.2188C17.3311 9.13672 16.7773 8.58301 16.7773 7.69531V2.45703H12.0488C10.2119 2.45703 9.20117 3.45898 9.20117 5.27832V5.69141H10.5547C11.9346 5.69141 12.9365 6.0166 13.9121 6.9834L18.9043 11.9756C19.8535 12.9248 20.0908 14.0146 20.0908 15.3242V20.3164ZM18.4648 7.9502H23.0176C22.9736 7.65137 22.7539 7.37891 22.4199 7.03613L18.8691 3.39746C18.5439 3.06348 18.2627 2.84375 17.9639 2.80859L17.9727 7.44922C17.9727 7.80078 18.1133 7.9502 18.4648 7.9502ZM7.70703 24.834H15.9336C17.8145 24.834 18.7988 23.8408 18.7988 21.9424V15.1309H12.5322C11.416 15.1309 10.8711 14.5771 10.8711 13.4609V6.97461H7.70703C5.82617 6.97461 4.8418 7.97656 4.8418 9.875V21.9424C4.8418 23.8496 5.82617 24.834 7.70703 24.834ZM12.6377 13.8389H18.6406C18.5352 13.4609 18.3066 13.1006 17.9111 12.6963L13.2793 7.99414C12.875 7.58984 12.5322 7.31738 12.1543 7.20312V13.3555C12.1543 13.6719 12.3213 13.8389 12.6377 13.8389Z"/>
                </svg>
            </button>
        ) : null
    );
}

export default EmailHref;
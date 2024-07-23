import './styles/Button.css';

export default function Button({bgColor, text, borderRadius='0rem', textColor='--background-color'}){
    return(
        <button style={{backgroundColor : `var(${bgColor})`, borderRadius:borderRadius, color: `var(${textColor})`}}>
            {text}
        </button>
    );
}
import './styles/FloatingButton.css';

export default function FloatingButton(click){
    return(
        <div className="floating-btn" onClick={click}>+</div>
    )
}
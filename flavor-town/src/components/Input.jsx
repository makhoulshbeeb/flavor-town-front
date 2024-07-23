import './styles/Input.css'

export default function Input({ name, id, placeholder }) {
    return (
        <input name={name} id={id} placeholder={placeholder} />
    );
}
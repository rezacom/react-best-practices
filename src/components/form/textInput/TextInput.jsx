import "./style.css";

export default function TextInput({
    label = null,
    id = null,
    type = "text",
    onChange,
    name = null
}) {

    const handleChange = (event) => { if (onChange) onChange(event.target.value) }

    return (
        <div className="text-input">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} onChange={handleChange} />
        </div>
    )
}

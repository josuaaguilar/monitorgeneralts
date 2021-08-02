import { useRef, useState } from "react";

type ElementFormEvent = React.FormEvent<HTMLFormElement>

function Card(props: object) {
    const userInput = useRef<HTMLInputElement>(null)
    const [newUser, setNewUser] = useState<string>('');
    console.log(props)
    const handleSubmit = (e: ElementFormEvent) => {
        e.preventDefault();
        setNewUser('');
        userInput.current?.focus();
        console.log("Handle")
    }
    return (<div className="card mb-1">
        <div className="card-head">
            <h2>Registra tus usuarios!</h2>
        </div>
        <div className="card-body">
            <div className="form" onSubmit={e => handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    required
                    autoFocus
                    ref={userInput}
                    onChange={e => setNewUser(e.target.value)}
                />
                <button className="btn btn-primary btn-block mt-2">Registrar!!</button>
            </div>
        </div>
    </div>) /**Retorna JSX */
}
export default Card;
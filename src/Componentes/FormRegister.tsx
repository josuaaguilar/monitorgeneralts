import { useRef, useState } from "react"

type ElementFormEvent = React.FormEvent<HTMLFormElement>

interface IUser {
  name: string;
  active: boolean;
}

function RegisterForm() {
  const userInput = useRef<HTMLInputElement>(null)
  const [newUser, setNewUser] = useState<string>('')
  const [users, setUsers] = useState<IUser[]>([])
  const Register = (e: ElementFormEvent) => {
    e.preventDefault();
    addUser(newUser);
    setNewUser('');
    userInput.current?.focus();
  }
  const addUser = (name: string): void => {
    const newUsers: IUser[] = [...users, { name, active: true }]
    setUsers(newUsers);

  }
  return (
    <div className="card mb-1">
      <div className="card-body">
        <form onSubmit={Register}>
          <h1>Registra tus usuarios!</h1>
          <input
            type="text"
            className="form-control"
            onChange={e => setNewUser(e.target.value)}
            value={newUser}
            required
            autoFocus
            ref={userInput} />
          <button className="btn btn-primary btn-block mt-2">Registrar!!!</button>
        </form>
      </div>
    </div>
  )/**Retorna JSX */
}
export default RegisterForm;

  import { useState, ChangeEvent, FormEvent } from "react";
  import { ReactComponent as Logo } from "./logo.svg";
  import { getData } from "./utils/data-utils";
  import FormInput from './components/form-input/form-input';
  import { ReactComponent as Cognito } from "./cognito.svg";

  import './App.css';
import HomePage from "./pages/homepage";

  // TypeScript declarations
  type User = {
    name: string,
  }

  const defaultFormFields = {
    username: '',
    password: '',
  }

  const App = () => {
    // react hooks
    const [user, setUser] = useState<User | null>()
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { username, password } = formFields

    const resetFormFields = () => {
      return (
        setFormFields(defaultFormFields)
      );
    }

    // handle input changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormFields({...formFields, [name]: value })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        // make the API call
        const res:string = await getData(
          'https://aws-serverless.onrender.com/signin', username, password
        )
        console.log(res)
        setUser({name: res});
        resetFormFields()
      } catch (error) {
        alert('User Sign In Failed');
      }
    };

    const reload = () => {
      setUser(null);
      resetFormFields()
    };

    return (
        <>
          {!user ? 
      <div className='App-header'>
        <div className="card">
          <Logo className="logo" />
        <h2 >Sign In</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="username"
              type="username"
              required
              name="username"
              value={username}
              onChange={handleChange}
            />
            <FormInput
              label="Password"
              type='password'
              required
              name='password'
              value={password}
              onChange={handleChange}
            />
            <div className="button-group">
              <button className="signin-buttons" type="submit">Sign In</button>
              
                <button className="signin-buttons" type="button" onClick={reload}>Clear</button>
              
            </div>
          </form>
          <div  className="cognito">
              <p>Powered by</p>
            <Cognito />
          </div>
        </div>
      </div>
      :
      <HomePage></HomePage>}
      </>
    );
  }

  export default App;
  
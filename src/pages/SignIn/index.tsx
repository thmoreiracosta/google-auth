import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../services/firebase';
import './styles.scss';

interface userProps {
  displayName: string;
  email: string;
  photoURL: string;  
}

export default function SignIn() {
  const [user, setUser] = useState<userProps>({} as userProps);

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((data) => {
      setUser((data.user as unknown) as userProps);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="container">
      <div className='user'>
        {user.photoURL && <img src={user.photoURL} alt="Foto Perfil" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h2>Acesse sua conta</h2>
      <span>
        Utilizando autenticação social, por exemplo, com o Google você <br />
        facilita a vida do usuário e aumenta a segurança do seu sistema.
      </span>

      <div className="social">
        <button
          type="button"
          className="button"
          onClick={handleGoogleSignIn}
        >
          <svg
            aria-hidden="true"
            className="native svg-icon iconGoogle"
            width="35"
            height="25"
            viewBox="0 0 18 18">
            <path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
              fill="#4285F4">
            </path>
            <path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
              fill="#34A853">
            </path>
            <path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
              fill="#FBBC05">
            </path>
            <path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
              fill="#EA4335"></path>
          </svg>
          Entrar com o Google
        </button>
      </div>

    </div>
  )
}


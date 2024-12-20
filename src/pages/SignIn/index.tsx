import { useState } from 'react';
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../services/firebase';
import './styles.scss';

interface UserProps {
  name: string;
  login: string;
  avatar_url: string;
  email: string | null;
  photoURL: string | null;
}

export default function SignIn() {
  const [user, setUser] = useState<UserProps | null>(null);

  function handleGithubSignIn() {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName || 'Unknown User',
          login: user.email || 'No login',
          avatar_url: user.photoURL || 'https://via.placeholder.com/150',
          email: user.email,
          photoURL: user.photoURL,
        };
        setUser(userInfo); // Set user details from GitHub
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName || 'Unknown User',
          login: user.email || 'No login',
          avatar_url: user.photoURL || 'https://via.placeholder.com/150',
          email: user.email,
          photoURL: user.photoURL,
        };
        setUser(userInfo); // Set user details from Google
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleFacebookSignIn() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user.displayName || 'Unknown User',
          login: user.email || 'No login',
          avatar_url: user.photoURL || 'https://via.placeholder.com/150',
          email: user.email,
          photoURL: user.photoURL,
        };
        setUser(userInfo); // Set user details from Facebook
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <div className="user">
        {user?.avatar_url && <img src={user.avatar_url} alt="Foto Perfil" />}
        <strong>@{user?.name}</strong>
        <small>{user?.login}</small>
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
            viewBox="0 0 18 18"
          >
            <path
              d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
              fill="#4285F4"
            />
            <path
              d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
              fill="#34A853"
            />
            <path
              d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
              fill="#FBBC05"
            />
            <path
              d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
              fill="#EA4335"
            />
          </svg>
          Entrar com o Google
        </button>
      </div>
      <div className="social">
        <button
          type="button"
          className="button"
          onClick={handleGithubSignIn}
        >
          <svg
            aria-hidden="true"
            className="svg-icon iconGitHub"
            width="35"
            height="25"
            viewBox="0 0 18 18"
          >
            <path
              d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"
              fill="#ffffff"
            />
          </svg>
          Entrar com o GitHub
        </button>
      </div>




      <div className="social">
        <button
          type="button"
          className="button"
          onClick={handleFacebookSignIn}
        >
          <svg
            aria-hidden="true"
            className="svg-icon iconFacebook"
            width="35"
            height="25"
            viewBox="0 0 18 18"
          >
            <path
              d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
              fill="#ffffff"
            />
          </svg>
          Entrar com o Facebook
        </button>
      </div>
    </div >
  );
}

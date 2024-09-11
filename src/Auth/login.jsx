import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login Success:", credentialResponse);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="998530778811-ouepu0udqaruuituij1jg1hluulog9oh.apps.googleusercontent.com">
      <div className="App">
        <h1>Login con Google</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

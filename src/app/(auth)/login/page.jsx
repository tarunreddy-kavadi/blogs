import { SignIn } from "../../../../lib/sessions"
const LoginPage = () => {

  return (
    <div>
      LoginPage
      <form action={SignIn}>
        <button>
          loginhere
        </button>
      </form>


    </div>
  )
}

export default LoginPage

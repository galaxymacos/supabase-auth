import {login, signup} from "@/app/(reference)/login/action";

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" required />
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
        </form>
    )
}
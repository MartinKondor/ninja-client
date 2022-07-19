
export const URL = "http://localhost:3000";

export async function signinUser(email, password, setToken, setErrors) {
    return fetch(URL + "/user/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.appStatus === 0) {
            setErrors([res.msg]);
        }
        else {
            setToken((p) => {
                sessionStorage.setItem('token', JSON.stringify(res.token));
                return res.token;
            });
        }
    })
    .catch((error) => {
        setErrors([error]);
    });
}

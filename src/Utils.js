
export const URL = "http://localhost:3000";

export async function signinUser(email, password, setToken, setAlerts) {
    
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
            setAlerts([{msg: res.msg, type: "danger"}]);
        }
        else {
            setToken((p) => {
                sessionStorage.setItem('token', JSON.stringify(res.token));
                return res.token;
            });
        }
    })
    .catch((error) => {
        setAlerts([{msg: error, type: "danger"}]);
    });
}

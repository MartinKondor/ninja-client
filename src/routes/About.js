
export default function About() {
    return (
        <div className="pb-5 pt-5 ps-5 pe-5 bg-white">
            <h2 className="fw-bold text-center">What is this website for?</h2>

            This website's main purpose is to provide a secure, fast and private messaging platform for <i>anyone</i>.
            <br />

            This website might be helpfull for you for many reasons, including:

            <ul>
                <li>For Messaging people on this site.</li>
                <li>If you want to use a secure & private messaging platform.</li>
                <li>If you want to use an ad-free website for managing your messages.</li>
            </ul> 

            <h2 className="fw-bold text-center">How to use our website?</h2>
            <br />

            This website works the following way:
            <ol>
                <li>You either <a href="/signin">Sign In</a> or <a href="/signup">Sign Up</a> with a new account.</li>
                <li>You can add new friends or write to your already started conversations.</li>
                <li>You can create groups where multiple people can message with each other.</li>
            </ol>

        </div>
    );
};

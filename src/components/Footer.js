import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <footer className="text-center text-muted bg-light small pb-1 pt-5 mt-5">
            <span>Copyright &copy; <a href="https://martinkondor.github.io/">Martin Kondor</a> 2022</span> - <a href="mailto:martinkondor@gmail.com">Contact</a> - <a href="#legal">Legal</a> - <a href="#about">About</a> - <a href="https://github.com/MartinKondor/ninja-messages/ninja-server">Contribute</a>
        </footer>
    );
};

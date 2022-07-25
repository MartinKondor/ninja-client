
export default function Contact() {
    return (
        <div className="text-center mt-4 auth-form">
            <h4 className="fw-bold">Address</h4>
            <p className="text-muted">No address at the moment.</p>
            
            <hr />
            <h4 className="fw-bold">Email</h4>
            <a href="mailto:martinkondor@gmail.com">Contact Us!</a>
            
            <hr />
            <h4 className="fw-bold">GitHub</h4>
            <a href="http://github.com/MartinKondor/ninja-server">Server-side functionality</a>
            <br />
            <a href="http://github.com/MartinKondor/ninja-client">Client-side functionality</a>
        </div>
    );
};

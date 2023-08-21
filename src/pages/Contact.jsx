import { Helmet } from "react-helmet";

export default function Contact() {
    return (
        <div id="contact">
            <Helmet>
                <link rel="canonical" href="https://funnyphotos.co.uk/contact" />
                <title>Contact • FunnyPhotos.co.uk</title>
                <meta name="description" content="Contact us if you have any queries or suggestions for the site." />
            </Helmet>

            <div id="header-container">
                <header className="max-width">
                    <h1>Contact</h1>
                </header>
            </div>
            
            <div id="main-container">
                <main className="max-width">
                    <p>If you have any queries or suggestions for the site, you can get in touch with us at hi@funnyphotos.co.uk.</p>
                </main>
            </div>
        </div>
    )
}
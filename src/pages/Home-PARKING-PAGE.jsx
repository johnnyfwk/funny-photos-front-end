import Helmet from 'react-helmet';

export default function HomeParkingPage() {
    return (
        <div>
            <Helmet>
                <link rel="canonical" href="https://funnyphotos.co.uk/" />
                <title>FunnyPhotos.co.uk</title>
                <meta name="description" content="Get in touch if you have any queries about this domain." />
            </Helmet>

            <header>
                <h1>FunnyPhotos.co.uk</h1>
            </header>

            <main>
                <p>If you have any queries about this domain, you can get in touch with us at hi@funnyphotos.co.uk.</p>
            </main>
        </div>
    )
}
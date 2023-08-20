import { Helmet } from "react-helmet";

export default function TermsAndConditions() {
    return (
        <div id="terms-and-conditions">
            <Helmet>
                <link rel="canonical" href="https://funnyphotos.co.uk/terms-and-conditions" />
                <title>Terms & Conditions • FunnyPhotos.co.uk</title>
                <meta name="description" content="The terms and conditions for FunnyImages.co.uk." />
            </Helmet>

            <div id="header-container">
                <header className="max-width">
                    <h1>Terms & Conditions</h1>
                </header>
            </div>

            <div id="main-container">
                <main className="max-width">
                    <h2>Acceptance of Terms</h2>
                    <p>By accessing or using FunnyImages.co.uk (the "Website"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use the Website.</p>

                    <h2>Use of Content</h2>
                    <h3>Image Usage</h3>
                    <p>The Website sources funny images from various stock photo and photography sites. Users are permitted to view, share, and download these images for personal, non-commercial use only.</p>
                    <h3>Prohibited Actions</h3>
                    <p>Users are strictly prohibited from:</p>
                    <ul>
                        <li>Using images for commercial purposes without proper licensing.</li>
                        <li>Modifying, altering, or re-distributing images in a manner that violates copyright or licensing agreements.</li>
                        <li>Using images in any way that is unlawful, harmful, offensive, or defamatory.</li>
                    </ul>

                    <h2>Copyright and Ownership</h2>
                    <p>All images sourced from stock photo and photography sites remain the property of their respective owners, and their use is subject to the terms and conditions of the original source.</p>

                    <h2>Disclaimers</h2>
                    <h3>No Warranty</h3>
                    <p>The Website is provided "as is" without warranties of any kind, either expressed or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
                    <h3>Liability</h3>
                    <p>FunnyImages.co.uk and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Website.</p>

                    <h2>Changes to Terms</h2>
                    <p>FunnyImages.co.uk reserves the right to update or modify these Terms and Conditions at any time without prior notice. Users are encouraged to review these terms regularly for changes.</p>

                    <h2>Termination</h2>
                    <p>FunnyImages.co.uk reserves the right to terminate or suspend access to the Website at its discretion, with or without notice.</p>

                    <h2>Governing Law</h2>
                    <p>These Terms and Conditions are governed by and construed in accordance with the laws of the UK.</p>

                    <h2>Contact Information</h2>
                    <p>For any questions or concerns related to these Terms and Conditions, please contact us at hi@funnyimages.co.uk.</p>
                    <p>By using FunnyImagesHub.com, you agree to these Terms and Conditions. Failure to comply with these terms may result in the termination of your access to the Website.</p>

                    <p>Last updated: 20th August 2023</p>
                </main>
            </div>
        </div>
    )
}
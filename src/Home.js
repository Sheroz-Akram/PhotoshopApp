import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div>
            <section class="hero">
                <h1>Welcome to Our Photoshop App</h1>
                <p>Create amazing images with our easy-to-use filters and tools</p>
                <button href="#" class="btn"><Link to="/PhotoApp">Get Started</Link></button>
            </section>

            <div class="heroImage"></div>
            
            <section class="features">
                <div class="feature">
                    <h2>Undo/Redo</h2>
                    <p>This feature allows users to undo or redo their previous actions. This can be useful if they make a
                        mistake or change their mind about a particular edit. A simple button or keyboard shortcut could be used
                        to trigger the undo/redo function.</p>
                </div>

                <div class="feature">
                    <h2>Filters with slider</h2>
                    <p>This feature allows users to apply various filters to their images, such as brightness, contrast,
                        saturation, and more. A slider control could be used to adjust the strength of the filter, giving users
                        more control over the final result.</p>
                </div>

                <div class="feature">
                    <h2>Reset</h2>
                    <p>This feature allows users to revert their image to its original state. This can be useful if they make
                        too many edits and want to start over, or if they accidentally apply a filter that they don't like.</p>
                </div>
            </section>


            <section class="cta">
                <h2>Start Creating Today</h2>
                <p>
                    Ready to get started? Try our simple Photoshop app today and see the difference it can make in your photos!
                </p>
                <button href="#" class="button"><Link to="/PhotoApp">Get Started</Link></button>
            </section>

            <footer>
                <p>&copy; 2023 PhotoShop App . All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Home;

import React from 'react';
import styles from './Help.module.css'

function Help() {
    return (
        <div className={styles.helpContainer}>
            <h1>Photoshop App Help:</h1>
            <p>Welcome to the Photoshop App Help Center! Here you can find answers to commonly asked questions and learn how to use the various features of our app.</p>
            <h2>Frequently Asked Questions</h2>
            <h3>What file types can I import into the app?</h3>
            <p>Our app supports the following file types: JPG, PNG, BMP, GIF, PSD, and TIFF.</p>
            <h3>How can I undo or redo my edits?</h3>
            <p>To undo or redo your edits, simply use the "Undo" or "Redo" buttons located in the Side menu on the Right side of the App.&nbsp;</p>
            <h3>How do I reset my image to its original state?</h3>
            <p>To reset your image to its original state, use the "Reset" button located in the Side menu.</p>
            <h2>Using Filters</h2>
            <p>Our app offers a variety of filters that you can apply to your images. Here's how to use them:</p>
            <ol>
                <li>Open an image in the app.</li>
                <li>Select a filter from the Side menu on the Right hand Side.</li>
                <li>Adjust the intensity of the filter using the slider.</li>
            </ol>
            <h2>Filters Funtionalities:</h2>
            <p>Different filters available in the Photoshop app and their usage with slider are:</p>
            <ol>
                <li>
                    <p>Brightness filter: It adjusts the brightness of the image. A slider is used to increase or decrease the brightness of the image.</p>
                </li>
                <li>
                    <p>Contrast filter: It increases or decreases the contrast of the image. A slider is used to control the contrast.</p>
                </li>
                <li>
                    <p>Saturation filter: It increases or decreases the saturation of the image. A slider is used to control the saturation.</p>
                </li>
                <li>
                    <p>Hue filter: It adjusts the hue of the image. A slider is used to control the hue.</p>
                </li>
                <li>
                    <p>Blur filter: It blurs the image. A slider is used to control the amount of blur.</p>
                </li>
                <li>
                    <p>Sharpen filter: It sharpens the image. A slider is used to control the amount of sharpness.</p>
                </li>
                <li>
                    <p>Grayscale filter: It converts the image to grayscale. A slider is used to control the amount of grayscale.</p>
                </li>
            </ol>
            <p>These filters are used to enhance the image and make it more visually appealing. The slider is used to control the amount of effect applied to the image. With the help of these filters, users can create stunning images with just a few clicks.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions or issues with our app, please contact us at <a href="mailto:support@photoshopapp.com" target="_new">support@photoshopapp.com</a>. We're happy to help!</p>
        </div>
    );
}

export default Help;

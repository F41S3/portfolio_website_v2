import React from "react";
import PropTypes from 'prop-types'

/**
 * ImageLink component
 * This component represents the footer section of the application.
 *
 * @param {object} props - Component properties.
 * @param {array} props.url - String representing url you want to direct to.
 * @param {array} props.img - String representing the image to display.
 * @param {array} props.alt - String for the tag for the image.
 *
 * @returns {JSX.Element} The JSX element representing the footer.
 */
export default function ImageLink({url, img, alt}) {
    /**
     * Define propTypes for validation and documentation purposes.
     * Ensure that props.url, props.img, and props.alt are strings
     */
    ImageLink.propTypes = {
        url: PropTypes.string,
        img: PropTypes.string,
        alt: PropTypes.string,
    }
    /**
     * Define defaultProps to provide default values when props are not provided.
     * Default value for url, img and alt is an empty string.
     */
    ImageLink.defaultProps = {
        url: "",
        img: "",
        alt: "",
    }

    return (
        <a className={"image-link"} target='_blank'
           rel="noopener noreferrer"
           href={url}>
            {/* Image tag with src and alt attributes */}
            <img src={process.env.PUBLIC_URL + img} alt={alt}/>
        </a>
    )
}


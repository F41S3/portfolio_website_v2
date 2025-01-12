import React from "react";


export default function ImageLink({url, img, alt}) {
    ImageLink.propTypes = {
        url: url.string,
        img: img.string,
        alt: alt,
    }
    ImageLink.defaultProps = {
        url: "",
        img: "",
        alt: "",
    }

    return (
        <a className={"image-link"} target='_blank'
           rel="noopener noreferrer"
           href={url}>
            <img src={process.env.PUBLIC_URL + img} alt={alt}/>
        </a>
    )
}


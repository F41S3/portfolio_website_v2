import React, {useState} from 'react';
import './css/styles.css';

export default function ImageSlider({ images }) {
    let curr_im_index = 0
    let [selected, setSelected] = useState(images[0])


    const handlePrev = () => {
        if (curr_im_index > 0) {
            curr_im_index = curr_im_index - 1;
            selected = images[curr_im_index]
            setSelected(selected)
        }
    };

    const handleNext = () => {
        if (curr_im_index < images.length-1) {
            curr_im_index = curr_im_index + 1;
            selected = images[curr_im_index]
            setSelected(selected)
        }
    };

    return (
        <div className="image-slider">
            <img src={process.env.PUBLIC_URL + selected} alt="Placeholder" />
            <button onClick={() => handlePrev()}>Previous</button>
            <button onClick={() => handleNext()}>Next</button>
        </div>
    )
}


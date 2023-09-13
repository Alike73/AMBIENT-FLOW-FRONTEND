
import axios from 'axios';

const myURL = 'http://localhost:4000';

const getSounds = (setSounds) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
        setSounds(data)
    })
}

const addSound = (image, setImage, title, setTitle, category, setCategory, soundLink, setSoundLink, setSounds) => {
    axios.post(`${myURL}/saveSound`, { image, title, category, soundLink })
    .then((data) => {
        console.log(data)
        setImage('')
        setTitle('')
        setCategory('')
        setSoundLink('')
        getSounds(setSounds)
    })
}

const editSound = (itemId, image, setImage, title, setTitle, category, setCategory, soundLink, setSoundLink, setEditing, setSounds) => {
    axios.put(`${myURL}/editSound`, {_id: itemId, image, title, category, soundLink })
    .then((data) => {
        console.log(data)
        setImage('')
        setTitle('')
        setCategory('')
        setSoundLink('')
        setEditing(false)
        getSounds(setSounds)
    })
}

const deleteSound= (_id, setSounds) => {
    axios.delete(`${myURL}/deleteSound/${_id}`)
    .then((data) => {
    console.log(data);
    getSounds(setSounds);
    })
    .catch((error) => {
    console.log(error);
    });
};

export { getSounds, addSound, editSound, deleteSound };

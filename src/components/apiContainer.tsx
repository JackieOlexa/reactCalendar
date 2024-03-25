import { useState } from 'react';
import axios from 'axios';
const params = {};
const [response, setResponse] = useState([]);

const CalledAPI: React.FC = () => {
    return (
        axios.get('https://cat-fact.herokuapp.com/facts', { params })
            .then(response => {
                const apiResponse = response.data;
                setResponse(apiResponse)
            }).catch(error => {
                console.log(error)
            })
    );
};

export default CalledAPI;








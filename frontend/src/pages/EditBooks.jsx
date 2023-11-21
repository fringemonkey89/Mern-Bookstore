import React from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setauthor] = useState('');
    const [publishYear, setpublishYear] = useState('');
    const [loading, setLoading] = useState('false');
    const navigate  = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get()
        .then((response) => {

        })
        .catch((error) => {
            console.log(error)
            setLoading(false);
        })
    }, [])

    const handleEditeBook = () => {

        
    }

    return (
        <div> EditBook</div>
    )
}

export default EditBook
import React from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState('false');
    const navigate  = useNavigate();
    const {id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
        .then((response) => {
            setAuthor(response.data.author)
            setPublishYear(response.data.publishYear)
            setTitle(response.data.title)
            setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            setLoading(false);
            console.log(error)
        })
    }, [])

    const handleEditeBook = () => {
        const data = {
            title,
            author,
            publishYear
        };
        setLoading(true)
        axios
            .put(`http://localhost:5555/books/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('book was edited', {variant: 'success'});
                navigate('/')
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error'})
                console.log(error);
            })

    }

    return (
        <div> EditBook</div>
    )
}

export default EditBook
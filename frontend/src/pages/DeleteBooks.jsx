import React from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
    
    const [loading, setLoading] = useState('false');
    const navigate  = useNavigate();
    const { id} = useParams();
    const { enqueueSnackbar } = useSnackbar();

    return (
        <div> DeleteBook</div>
    )
}

export default DeleteBook
import Swal, { SweetAlertResult } from 'sweetalert2';

interface ISwalFireError {
    message: string
}

const SwalFireError = ({message}:ISwalFireError):Promise<SweetAlertResult<any>> => (
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
        footer: '<a href="">Why do I have this issue?</a>'
    })
);

export default SwalFireError;
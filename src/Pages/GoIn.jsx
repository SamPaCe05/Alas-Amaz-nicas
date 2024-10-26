
import { useParams } from 'react-router-dom'
import FormSignin from '@/components/FormSignin';
import FormSignup from '@/components/FormSignup';
export default function GoIn() {
    const { type } = useParams();
    return (
        <div className=''>
            {
                type == 'signin' ? (
                    <FormSignin></FormSignin>
                ) : (
                    <FormSignup></FormSignup>
                )
            }

        </div>
    )
}

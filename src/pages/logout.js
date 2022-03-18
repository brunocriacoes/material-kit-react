
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
const Logout = () => {
    const router = useRouter();
    Cookies.remove('token');
    router.push('/login');
    return (<></>);
};
export default Logout;

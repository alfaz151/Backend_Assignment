import {Link} from 'react-router-dom' ;


const Home1 = () =>
{
    
    
    return(
    <>
    <Link to="/Create"><button >Create</button></Link>
    <Link to="/Read"> <button >Read</button></Link>
    <Link to="/Update"> <button >Update</button></Link>
    <Link to="/Delete"> <button >Delete</button> </Link>
    </>
    )
}
export default Home1;
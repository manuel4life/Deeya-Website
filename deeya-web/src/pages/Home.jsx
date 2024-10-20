import { VEGETABLES } from '../constants/index'
const Home = () => {
    return (
        <div className="h-[600px] flex items-center text-white justify-center" style={{
            backgroundImage: `url(${VEGETABLES})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-heebo font-heebo'>Deeya</h1>
                <p className='text-h3-heading mt-[16px] mb-[30px] font-heebo'>Enjoy fresh, affordable, and traceable farm produce, delivered to you in just 24 to 48 hours!</p>
                <button className='px-[10px] py-[14px] bg-[#2FB078] text-white rounded-[16px] font-heebo text-ui-label-semi-bold'>Start Buying</button>
            </div>
        </div>
    )
}




export default Home;
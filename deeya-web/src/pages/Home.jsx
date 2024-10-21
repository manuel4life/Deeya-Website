import Button from '../components/Button';
import { VEGETABLES,ELLIPSE1, sampleBlogData} from '../constants/index'
import InputApp from '../components/InputApp';
import BlogCard from '../components/BlogCard';
import TestimonialCard from '../components/TestimonialCard';
const Home = () => {
    return (
        <>
            <div className="h-[600px] flex items-center text-white justify-center" style={{
                backgroundImage: `url(${VEGETABLES})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-heebo font-heebo'>Deeya</h1>
                    <p className='text-h3-heading mt-[16px] mb-[30px] font-heebo'>Enjoy fresh, affordable, and traceable farm produce, delivered to you in just 24 to 48 hours!</p>
                    <Button label="Start Buying" disabled={false} className='px-[21px] py-[13px] bg-[#2FB078] text-white rounded-[16px]' />
                </div>
            </div>
            <section className='flex flex-col items-center '>
                <h2 className='text-h2-heading font-heebo mt-[50px]'>Our Blogs</h2>
                <div className="grid grid-cols-3 gap-[70px] mt-[40px] mb-[40px]">
                    {
                        sampleBlogData.map((blog)=>(
                            <BlogCard image={blog.image} date={blog.date} title={blog.title} description={blog.description} author={blog.author}/>
                        ))
                    }
                        {/* <TestimonialCard image={ELLIPSE1} name={"Nadia"} testimonial={"I totally love how easy it is to use this platform"}/> */}
                </div>
                <Button label={"View Blogs"} className='bg-[#2FB078] px-[10px] py-[14px] text-white mb-[50px]'/>
            </section>
            <div className='space-y-[71px]'>
                <section className='bg-[#384E2C] h-[210px] space-y-auto flex flex-col justify-center'>
                    <h2 className='text-h2-heading font-heebo text-white text-center'>Partners</h2>
                    <h3 className='text-h3-heading font-heebo text-white text-center'>Alx Ventures</h3>
                </section>
                <InputApp />
            </div>
        </>

    )
}




export default Home;
import Button from "./Button";
import { PLUS } from "../constants";

const MarketPlaceCard = ({ image, title, discription, price, size }) => {
    return (
        <>
            <div className="w-[317px] h-[444px] border-[0.6px] border-[#424345] px-[18px] py-5 rounded-2xl font-heebo">
                <div className="space-y-[16px]">
                    <img src={image} alt="" className="w-[282px] h-[176px] border-0" />
                    <h3 className="text-h3-heading">
                        {title}
                    </h3>
                    <p className="body-text">
                        {discription}
                    </p>
                    <span className="flex">
                        <p className="text-h3-heading">
                            &#8373;{price}
                        </p>
                        <p className="text-body-text-medium">/{size}</p>
                    </span>
                </div>
                <div className="mt-[58px]">
                    <Button icon={PLUS} label={'Add to Cart'} className="bg-[#2FB078] P-[14px] w-full h-[52px] flex gap-[10px] item-center justify-center " />

                </div>
            </div>
        </>
    )
}




export default MarketPlaceCard;
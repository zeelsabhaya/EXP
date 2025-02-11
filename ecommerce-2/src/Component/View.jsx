import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router"
import { AddProductAsync, viewDataAsync } from "../service/action/productAction";

const View = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { viewdata } = useSelector(state => state.productReducer)
    const [count, setcount] = useState(1);
    const [sums, setsums] = useState();
    const [trlse, settrlse] = useState(false);

    let mrp = viewdata.price
    let Increment = () => {
        setcount(count + 1);
        let sum
        sum = mrp + mrp * count
        setsums(sum)
        settrlse(true)
    }

    let decrement = () => {
        if (count > 1) {
            setcount(count - 1);
            let sum
            sum = sums - mrp
            setsums(sum)
            settrlse(true)
        } else {
            alert("count is 1");
        }
        if (count == 1) {
            settrlse(false)
        }
    }
    useEffect(() => {
        dispatch(viewDataAsync(id))
    }, [])
    const addtocard = (id) => {
        dispatch(AddProductAsync(id, count))
    }    

    return (
        <>
            <section className="bg-[#f1f1ef] py-[100px] h-[100vh]">
                <div className="max-w-screen-xl mx-auto px-[16px]">
                    <div className="bg-[#ffff] p-[50px]">
                        <div className="grid gap-x-8 gap-y-5 grid-cols-2 mb-[50px]">
                            <div className="flex justify-center">
                                <img src={viewdata.thumbnail} alt="" className="h-[300px]" />
                            </div>
                            <div className="flex justify-stat flex-col justify-center">
                                <h2 className="text-[30px] font-semibold" id="viewdataH2">{viewdata.title}</h2>
                                <p className="text-[20px] font-semibold mt-[10px]">$  {trlse ? sums : viewdata.price}</p>
                                <p className="text-[20px] font-semibold mt-[10px]">Category :- {viewdata.category}</p>
                                <p className="text-[19px] mt-[10px] text-[#979da8]">{viewdata.description}</p>
                                <div className="flex justify-between items-center mt-[50px]">
                                    <div className="flex">
                                        <button onClick={decrement} className="border px-[20px] py-[5px] border-[#dddddd]">-</button>
                                        <h2 className="border px-[20px] py-[5px] border-[#dddddd]">{count}</h2>
                                        <button onClick={Increment} className="border px-[20px] py-[5px] border-[#dddddd]">+</button>
                                    </div>
                                    <button className="bg-[#6e7050] px-[30px] py-[10px] text-white font-semibold" onClick={() => addtocard(viewdata.id)}>Add To Card</button>
                                </div>
                            </div>
                        </div>
                        <p className="text-[19px] text-[#979da8] text-center">ReturnPolicy :- {viewdata.returnPolicy}</p>
                    </div>
                </div>
            </section>

        </>
    )
}
export default View
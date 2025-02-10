import { useEffect } from "react"
import { AddProductAsync } from "../service/action/productAction"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"

const AddToCard = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { Addcard } = useSelector(state => state.productReducer)
    useEffect(() => {
        dispatch(AddProductAsync(id))
    }, [])
    console.log(Addcard);
    
    return (
        <>
            <section className="bg-[#f1f1ef] py-[100px] h-[100vh]">
                <div className="max-w-screen-xl mx-auto px-[16px]">
                    <div className="bg-[#ffff] p-[50px]">
                        <h1 className="text-[50px] font-bold text-center">Cart</h1>
                        <div className="grid gap-x-8 gap-y-5 grid-cols-2 mb-[50px] mt-[50px]" >
                            <div className="">
                                <table className="table-fixed border border-[#dddddd]">
                                    <thead className="bg-[#f1f1ef]">
                                        <th className="border border-slate-300 py-[20px] px-[10px]">Product img</th>
                                        <th className="border border-slate-300 py-[20px] px-[10px]">Product</th>
                                        <th className="border border-slate-300 py-[20px] px-[10px]">Price</th>
                                        <th className="border border-slate-300 py-[20px] px-[10px]">Quantity</th>
                                        <th className="border border-slate-300 py-[20px] px-[10px]">Subtotal</th>
                                    </thead>
                                    <tbody>
                                        <td className="border border-slate-300"><img className="mx-auto" src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="" width={70} height={70} /></td>
                                        <td className="border text-center border-slate-300 px-[10px]">Essence Mascara Lash Princess</td>
                                        <td className="border text-center border-slate-300 px-[10px]">$ 9.99</td>
                                        <td className="border text-center border-slate-300 px-[10px]">1</td>
                                        <td className="border text-center border-slate-300 px-[10px]">$ 9.99</td>
                                    </tbody>
                                </table>
                            </div>
                            <div className="">
                                <div className="card border border-slate-300">
                                    <div className="card-head p-[10px] bg-[#f1f1ef]">
                                        <p className="text-center font-bold text-[20px]">Cart totals</p>
                                    </div>
                                    <div className="card-body p-[10px] ">
                                        <div className="flex justify-between border-b-4 border-[#dddddd]">
                                            <p className="py-[10px]">Subtotal</p>
                                            <p className="py-[10px]">$ 9.99</p>
                                        </div>
                                        <div className="flex justify-between border-b-4 border-[#dddddd]">
                                            <p className="py-[10px]">Total</p>
                                            <p className="py-[10px]">$ 9.99</p>
                                        </div>
                                        <button className="border bg-[#6e7050] text-white mt-[30px] p-[10px] px-[20px]">
                                            PLACE ORDER $164.80
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AddToCard
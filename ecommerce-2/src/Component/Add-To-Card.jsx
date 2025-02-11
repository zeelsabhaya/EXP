import { useDispatch, useSelector } from "react-redux"
import { cartAllDataAsync, RemoveDataAsync } from "../service/action/productAction"
import { CiCircleRemove } from "react-icons/ci";
import { useEffect } from "react"

const AddToCard = () => {
    const dispatch = useDispatch()
    const { Addcard } = useSelector(state => state.productReducer)

    useEffect(() => {
        dispatch(cartAllDataAsync())
    }, [])
    let HendelRemove = (id) => {
        dispatch(RemoveDataAsync(id))
    }

    return (
        <>

            <section className="bg-[#f1f1ef] py-[100px] h-[100vh]">
                <div className="max-w-screen-xl mx-auto px-[16px]">
                    <div className="bg-[#ffff] p-[50px]">
                        <h1 className="text-[50px] font-bold text-center">Cart</h1>
                        <div className="grid gap-x-8 gap-y-5 grid-cols-2 mb-[50px] mt-[50px]" >
                            <div className="table-elements">
                                <table className="table-fixed border border-[#dddddd]">
                                    <thead className="bg-[#f1f1ef]">
                                        <tr>
                                            <th></th>
                                            <th>Product img</th>
                                            <th className="border border-slate-300 py-[20px] px-[10px]">Product</th>
                                            <th className="border border-slate-300 py-[20px] px-[10px]">Price</th>
                                            <th className="border border-slate-300 py-[20px] px-[10px]">Quantity</th>
                                            <th className="border border-slate-300 py-[20px] px-[10px]">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Addcard.map((value, index) => (
                                                <tr key={index}>
                                                    <td className="border text-center border-slate-300 px-[10px]"><button onClick={() => HendelRemove(value.id)}><CiCircleRemove size={25} /></button></td>
                                                    <td className="border border-slate-300"><img className="mx-auto" src={value.thumbnail} alt="" width={70} height={70} /></td>
                                                    <td className="border text-center border-slate-300 px-[10px]">{value.title}</td>
                                                    <td className="border text-center border-slate-300 px-[10px]">${value.price}</td>
                                                    <td className="border text-center border-slate-300 px-[10px]">{value.quantity}</td>
                                                    <td className="border text-center border-slate-300 px-[10px]">${value.price * value.quantity}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-elements">
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
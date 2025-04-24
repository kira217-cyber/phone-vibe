import toast from "react-hot-toast";

export const getFavorites  = () =>{
    const favorites = localStorage.getItem("favorites");
    if(favorites) return JSON.parse(favorites)
        return []
}


export const addFavorite = phone => {
    
    const favorites = getFavorites()

    const isExist = favorites.find(p => p.id === phone.id)
    if(isExist) return toast.error("Phone Already Added")

    favorites.push(phone)

    toast.success("Phone Added Successfully")

    localStorage.setItem("favorites",JSON.stringify(favorites))
}

export const removeFavorites = (id)=>{
    const favorites = getFavorites()
    const remainingFavorites = favorites.filter(phone => phone.id !== id)
    localStorage.setItem("favorites",JSON.stringify(remainingFavorites))
    toast.success("Phone Remove Successfully")
}


export const getCarts = () =>{
    const carts = localStorage.getItem("carts");
    if(carts) return JSON.parse(carts)
        return []
}

export const addCarts = cart => {
    const carts = getCarts()
    const isExist = carts.find(c => c.id === cart.id)
    if(isExist) return toast.error("Cart Already Added")

    carts.push(cart)
    toast.success("Cart Added Successfully")

    localStorage.setItem("carts", JSON.stringify(carts))
}

export const removeCarts = (id)=>{
    const carts = getCarts();
    const remainingCarts = carts.filter(cart => cart.id !== id)
    localStorage.setItem("carts",JSON.stringify(remainingCarts))
    toast.success("Phone Remove Successfully")
}
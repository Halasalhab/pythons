import axios from 'axios'
import config from '../../csrftoken'


//the fucntion that add product to the database
export const addProduct = (file1: any, productinfo: any) => {
    const data = new FormData()
    data.append('file', file1[0])
    console.log('in add function')
    data.append('upload_preset', 'productimg')
    axios.post("https://api.cloudinary.com/v1_1/dve46qnma/image/upload", data)
        .then(res => {
            console.log(res.data.secure_url)
            axios.post('/api/products/', {
                product_name: productinfo.name, product_img: res.data.secure_url,
                product_description: productinfo.discrp, product_type: productinfo.type,
                product_quantity: productinfo.quantity, product_price: productinfo.price
            }, config)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
}

//action to change user informations
export const updateuserinfo = (userinfo: any, newinfo: any) => {
    return function (dispatch: any) {
        axios.post("/api/userimgupdate", {
            chang_it: 'info',
            user_id: userinfo,
            user_bio: newinfo.user_bio,
            user_phon: newinfo.user_phon,
            user_name: newinfo.user_name
        }, config)
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: 'UPDATE_IMG',
                    userinfo: res.data,
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: "UPDATE_ERROR",
                    message: err.message
                })
            });
    }
}
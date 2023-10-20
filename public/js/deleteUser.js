

function deleteUser(id){
    axios.delete(`/api/user/${id}`).then(data => {
        if(data.status == 200){
            alert(data.data)
            location.replace('/')
        }else if (data.status == 404){
            location.replace('/not-found')
        }
    })
}
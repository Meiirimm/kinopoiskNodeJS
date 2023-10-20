const stars = document.querySelectorAll('.comment-stars>img')

function rateFilm(rate){
    for(let i = 0; i < stars.length; i++){
        stars[i].classList.remove('active-star')
    }
    for(let i = 0; i < rate; i++){
        stars[i].classList.add('active-star')
    }
}

function sendRate(e){
    e.preventDefault()
    const activeStars = document.querySelectorAll('.active-star')
    const comment_text = document.querySelector('#comment-text').value
    const author = document.querySelector('#comment_author').value
    const film = document.querySelector('#comment_film').value

    if(activeStars.length > 0){
        axios.post('/api/rate' , {rate: activeStars.length , text: comment_text, authorId: author, filmId: film}).then(data => {
            if(data.data){
                location.reload()
            }
        })
    }
}

function deleteRate(rateId, filmId){
    // console.log(commentId);
    // console.log(blogId);

    axios.delete(`/api/rate/${rateId}`).then(data => {
        if(data.status == 200){
            location.replace(`/detail/${filmId}`)
        }else if (data.status == 404){
            location.replace('/not-found')
        }
    })
}
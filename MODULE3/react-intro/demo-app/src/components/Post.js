const Post = () => {
    
    const postData = {
        title:"Dummy Title",
        text:"Dummy Text",
        imageLink:"https://random.dog/2a96966e-faea-4ab8-98a3-2914c28c44bb.jpg"
    }

    return (
        <div>
            <p> { postData.title } </p>
            <img src = { postData.imageLink } alt="dog" height="200" />
            <p>{ postData.text }</p>
        </div>
    )
}

export default Post
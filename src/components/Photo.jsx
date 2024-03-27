const Photo = ({src, alt,})=>{
    return(
        <figure>
            <img src={src} alt={alt} className="mb-3 object-cover w-full max-h-56"/>
        </figure>
    )
}
export default Photo
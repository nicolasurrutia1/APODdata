const Photo = ({src, alt, thumb})=>{
    let source = src
    if(thumb !==undefined){
        source = thumb
    }
    return(
        <figure>
            <img src={source} alt={alt} className="mb-3 object-cover w-full max-h-56"/>
        </figure>
    )
}
export default Photo
const Photo = ({src, alt, thumb})=>{
    let source = src
    if(thumb !==undefined){
        source = thumb
    }
    return(
        <figure>
            <img src={source} alt={alt} className="mb-3 object-cover w-full h-full max-h-64"/>
        </figure>
    )
}
export default Photo
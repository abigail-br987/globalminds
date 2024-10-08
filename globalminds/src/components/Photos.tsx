import Figure11 from "../svg/Figure11"
import Figure3 from "../svg/Figure3"
function Photos() {
    return(
        <>
        <div className="grid grid-cols-2 mt-20 relative">
            <Figure11 color="gbRed" className="absolute h-10 left-1/2 top-2 z-10"/>
            <Figure11 color="gbYellow" className="absolute h-10 right-3 top-20 z-10"/>
            <Figure3 className="absolute h-10 left-1/3 bottom-10 z-10"/>

          <img
            className="object-cover rounded-lg shadow-lg
               border-gbBlue border-[10px] transform -rotate-2"
            src="https://placehold.co/600x400"
          />
                    <img
            className="object-cover rounded-lg shadow-lg
              border-gbBlue border-[10px]"
            src="https://placehold.co/600x400"
          />
       
        </div>
        </>
    )
}

export default Photos
import loading from '../../resources/server_down.svg'

const Loading = () => {
   
    return(
        <div className="mt-10 md:mt-20 flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
            <p className="text-2xl text-center font-semibold p-3">Loading... Please wait</p>

            <div className="grid md:grid place-content-center md:w-2/4">
                <img src={loading} alt="girl in an underconstruction site" />
            </div>
        </div>
    )
}

export default Loading
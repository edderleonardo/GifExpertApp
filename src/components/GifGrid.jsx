
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images, isLoading } = useFetchGifs(category);

    console.log(isLoading);

    return (
        <>
            <h3 className="text-2xl font-bold uppercase">{category}</h3>
            {
                isLoading && <p className="">Loading...</p>
            }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                            {...image}  // con esto enviamos todas las propiedades de image
                        />
                    ))
                }
            </div>
        </>
    )
}

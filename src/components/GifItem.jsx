
export const GifItem = ({ title, url }) => {

  return (
    <div className="border border-gray-300 rounded-md p-2">
      <img src={url} alt={title} className="w-full h-80 object-cover" />
      <p className="text-center">{title}</p>
    </div>
  )
}

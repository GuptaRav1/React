import ItemList from "./ItemList"

const RestMenuCategory = ({ data, showItemList, setShowIndex }) => {
  return (
    <div>
      <div className="shadow-lg w-3/5 m-auto bg-green-700 text-center mb-4 p-4 text-white text-lg">
        <div className="font-bold flex justify-between cursor-pointer" onClick={() => { setShowIndex() }}>
          <span>{data.title} ({data.itemCards.length})</span>
          <span>🔽</span>
        </div>
        {showItemList && <ItemList items={data.itemCards} />}
      </div>
    </div>
  )
}

export default RestMenuCategory
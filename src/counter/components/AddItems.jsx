import '../style/AddItems.css'

export default () => {
    return (
        <div className="add-item-box container">
            <button className="button">إضافة</button>
            <textarea placeholder="أضاف العناصر" className="input" cols="30" rows="10"></textarea>
        </div>
    )
}
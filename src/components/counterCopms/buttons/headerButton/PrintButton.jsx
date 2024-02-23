export default ({ butStyle }) => {
    const clickHandler = () => window.print();

    document.addEventListener('afterprint', () => alert(1))
    return (
        <button onClick={clickHandler} className={`${butStyle}`}>طباعة الصفحات</button>
    )
}
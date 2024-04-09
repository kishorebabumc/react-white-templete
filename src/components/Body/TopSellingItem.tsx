import './TopSelling.css';
type TopSellProps = {
    item: any
}

function TopSellingItem({ item }: TopSellProps) {
    return (
        <tr>
            <th scope="row">
                <a href="#">
                    <img src={item.preview} alt="" />
                </a>
            </th>
            <td>
                <a href="#" className="text-primary fw-bold">
                    {item.name}
                </a>
            </td>
            <td>${item.price.toFixed(2)}</td>
            <td className="fw-bold">{item.sold}</td>
            <td>${(item.price * item.sold).toFixed(2)}</td>
        </tr>
    )
}

export default TopSellingItem
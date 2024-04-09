import { SetStateAction, useState } from 'react';
import './Card.css';
import CardFilter from './CardFilter';
type card = {
    // card : {
    // _id: number,
    card: any
    // }
}


// function Card(card:card) {
const Card: React.FC<card> = ({ card }) => {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = (filter: SetStateAction<string>) => {// (period:string)
        setFilter(filter);
    };
    return (
        <div className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">
                <CardFilter filterChange={handleFilterChange} />
                <div className="card-body">
                    <h5 className="card-title">
                        {card.name} <span>| {filter}</span>
                    </h5>

                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className={card.icon}></i>
                        </div>
                        <div className="ps-3">
                            <h6>
                                {card.name === 'Revenue'
                                    ? "$" + card?.amount.toLocaleString('en-US')
                                    : card?.amount.toLocaleString('en-US')}
                            </h6>
                            <span className={`${card.percentage > 0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`}>
                                {card.percentage > 0
                                    ? card.percentage * 100
                                    : -card.percentage * 100}
                                %
                            </span>
                            <span className="text-muted small pt-2">
                                {card.percentage > 0 ? 'increase' : 'decrease'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
////////////////////////////////////////////////////////////////////////////
// interface CardProps {
//   card: {
//       _id: any;
//       name: any;
//       // other properties of the card
//   };
// }

// const Card: React.FC<CardProps> = ({ card }) => {
//   return (
//       <div>
//           <p>Card ID: {card.name}</p>
//       </div>
//   );
// };

// export default Card;
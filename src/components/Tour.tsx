import './Tour.css';

interface TourDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  state: string;
  ticketsUrl: string;
  status: 'available' | 'sold-out' | 'coming-soon';
}

const tourDates: TourDate[] = [
  {
    id: '1',
    date: 'MAR 15, 2024',
    venue: 'The Neon Roadhouse',
    city: 'Nashville',
    state: 'TN',
    ticketsUrl: '#',
    status: 'available'
  },
  {
    id: '2',
    date: 'MAR 22, 2024',
    venue: 'Electric Highway Club',
    city: 'Austin',
    state: 'TX',
    ticketsUrl: '#',
    status: 'available'
  },
  {
    id: '3',
    date: 'MAR 29, 2024',
    venue: 'Synthwave Saloon',
    city: 'Denver',
    state: 'CO',
    ticketsUrl: '#',
    status: 'sold-out'
  },
  {
    id: '4',
    date: 'APR 05, 2024',
    venue: 'Desert Moon Theater',
    city: 'Phoenix',
    state: 'AZ',
    ticketsUrl: '#',
    status: 'available'
  },
  {
    id: '5',
    date: 'APR 12, 2024',
    venue: 'Neon Country Arena',
    city: 'Los Angeles',
    state: 'CA',
    ticketsUrl: '#',
    status: 'coming-soon'
  },
  {
    id: '6',
    date: 'APR 19, 2024',
    venue: 'Electric Frontier Hall',
    city: 'Portland',
    state: 'OR',
    ticketsUrl: '#',
    status: 'available'
  }
];

const TourDateCard = ({ tourDate }: { tourDate: TourDate }) => {
  const getStatusButton = () => {
    switch (tourDate.status) {
      case 'available':
        return (
          <a href={tourDate.ticketsUrl} className="ticket-btn available">
            GET TICKETS
          </a>
        );
      case 'sold-out':
        return (
          <span className="ticket-btn sold-out">
            SOLD OUT
          </span>
        );
      case 'coming-soon':
        return (
          <span className="ticket-btn coming-soon">
            COMING SOON
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`tour-card ${tourDate.status}`}>
      <div className="tour-date">
        <span className="date-text">{tourDate.date}</span>
      </div>
      
      <div className="tour-info">
        <h3 className="venue-name">{tourDate.venue}</h3>
        <p className="venue-location">{tourDate.city}, {tourDate.state}</p>
      </div>
      
      <div className="tour-action">
        {getStatusButton()}
      </div>
    </div>
  );
};

const Tour = () => {
  return (
    <section id="tour" className="tour">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">TOUR DATES</h2>
          <p className="section-subtitle">
            Experience the synthwave country sound live on the road
          </p>
        </div>
        
        <div className="tour-list">
          {tourDates.map((tourDate) => (
            <TourDateCard key={tourDate.id} tourDate={tourDate} />
          ))}
        </div>
        
        <div className="tour-footer">
          <p className="tour-footer-text">
            More dates to be announced. Follow for updates!
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <span>📘</span> Facebook
            </a>
            <a href="#" className="social-link">
              <span>📷</span> Instagram
            </a>
            <a href="#" className="social-link">
              <span>🐦</span> Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
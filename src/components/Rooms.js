import Title from './Title';
import { rooms } from '../data';

const Rooms = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="rooms" />

      <div className="section-center featured-center">
        {rooms.map((room) => {
          const { id, img, title, info, date, location, duration, price } =
            room;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt={title} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration}</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Rooms;

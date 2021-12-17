import PropTypes from 'prop-types';
import { SectionStatistics } from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <SectionStatistics className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(el => (
          <li
            className="item"
            key={el.id}
            style={{
              backgroundColor: `${color()}`,
            }}
          >
            <span className="label">{el.label}</span>
            <span className="percentage"> {el.percentage}%</span>
          </li>
        ))}
      </ul>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

function color() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 class="title">{title}</h2>

      <ul className={css.statList}>
        {stats.map(item => (
          <li className={css.item} key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const Statistics = ({ stats }) => {
  return (
    <section class="statistics">
      <ul class="stat-list">
      {stats.map((stat) => (
          <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </li>
      ))}
      </ul>
    </section>
  );
};
/* <h2 class="title">Upload stats</h2> */
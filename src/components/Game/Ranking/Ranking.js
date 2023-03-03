import classes from "./Ranking.module.css";

const Ranking = ({ ranks }) => {
  return (
    <ul className={classes.rankList}>
      <h1>Current Top 10 Scores:</h1>
      {ranks.length > 0
        ? ranks.map((rank) => {
            return (
              <li className={classes.rankItems} key={rank.key}>
                <p>Name: {rank.name}</p>
                <p>Score: {rank.score}</p>
              </li>
            );
          })
        : null}
    </ul>
  );
};
export default Ranking;

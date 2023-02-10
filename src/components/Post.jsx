// const names = ["Alex", "John"];

import styles from "./Post.module.css"

export default function Post(props) {
  const { name, body } = props;
  return (
    <div className={styles.post}>
      <h1 className={styles.post__title}>{name}</h1>
      <p className={styles.post__txt}>{body}</p>
    </div>
  );
}

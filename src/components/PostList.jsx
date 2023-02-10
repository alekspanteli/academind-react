import Post from "./Post";
import styles from "./PostList.module.css"

export default function PostList(props) {
  return (
    <ul className={styles.list}>
      <Post name="Alex" body="Text goes here" />
      <Post name="John" body="Random goes here" />
    </ul>
  );
}

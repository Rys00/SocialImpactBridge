import styles from "./ngo-tile.module.scss";


interface NgoTileProps {
  name: string;
    location: string;
    description: string;
    tags: string[];

}
function NgoTileComponent({ name, location, description, tags }: NgoTileProps) {
  return (
    <div className={styles.ngoTile}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.name}>{name}</div>
            <div className={styles.location}>{location}</div>
          </div>
            <div className={styles.right}>

                  {tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>{tag}</span>
                  ))}
            </div>
        </div>
      <div className={styles.bottom}>
        <div className={styles.description}>{description}</div>
        </div>
    </div>
  );
}

export default NgoTileComponent;
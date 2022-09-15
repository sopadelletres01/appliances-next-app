export default function generateComponent(component) {
  return `import styles from "./styles.module.scss"

export default function ${component}() {
    return (
        <div className={styles.${component}}>${component}</div>
    )
}
`;
}
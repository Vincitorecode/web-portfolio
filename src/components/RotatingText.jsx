const RotatingText = ({ texts, mainClassName }) => {
  return (
    <div className={mainClassName}>
      {texts && texts.length > 0 ? texts[0] : 'No texts provided'}
    </div>
  )
}
export default RotatingText;

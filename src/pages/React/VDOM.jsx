const VDOM = () => {
  const dom = (
    <div className="title">
      <span>Hello Christine</span>
      <ul>
        <li>苹果</li>
        <li>橘子</li>
      </ul>
    </div>
  );
  console.log('dom: ', dom);
  return <>{dom}</>;
};

export default VDOM;

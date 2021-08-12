const DarkModeButton = (props) => {
  return (
    <li>
      <label className="darkMode" htmlFor="darkModeCheckbox">
        <input
          className="darkMode__input"
          type="checkbox"
          title="darkModeButton"
          id="darkModeCheckbox"
          onClick={props.handleDarkMode}
        />
        <div className="darkMode__slider darkMode__slider--round"></div>
      </label>
    </li>
  );
};
export default DarkModeButton;

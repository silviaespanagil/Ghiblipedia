const DarkModeButton = (props) => {
  return (
    <li>
      <label className="darkMode" for="checkbox">
        <input
          className="darkMode__input"
          type="checkbox"
          id="checkbox"
          onClick={props.handleDarkMode}
        />
        <div class="darkMode__slider darkMode__slider--round"></div>
      </label>
    </li>
  );
};
export default DarkModeButton;

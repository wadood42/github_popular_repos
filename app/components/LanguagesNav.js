import React from "react";
import PropTypes from "prop-types";
function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <>
      <ul className='flex-center'>
        {languages.map((language, index) => (
          <li key={index}>
            <button
              style={language === selected ? { color: "red" } : null}
              className='btn-clear nav-link'
              onClick={() => onUpdateLanguage(language)}>
              {language}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default LanguagesNav;

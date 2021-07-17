import React from "react";
import LanguagesNav from "./LanguagesNav";
import { fetchPopularRepos } from "../utils/api";
import ReposGrid from "./ReposGrid";
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: {},
      error: null,
    };
    this.onUpdateLanguage = this.onUpdateLanguage.bind(this);
    this.isLoadingg = this.isLoading.bind(this);
  }

  componentDidMount() {
    this.onUpdateLanguage(this.state.selectedLanguage);
  }

  onUpdateLanguage(language) {
    this.setState({
      selectedLanguage: language,
      error: null,
    });

    if (!this.state.repos[language]) {
      fetchPopularRepos(language)
        .then((data) =>
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [language]: data,
            },
          }))
        )
        .catch((error) => {
          console.warn("Error fetching repos:", error);
          this.setState({
            error: "There was an error fetching the repositories",
          });
        });
    }
  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state;
    console.log(repos[selectedLanguage]);
    return !repos[selectedLanguage] && error === null;
  }
  render() {
    const { selectedLanguage, repos, error } = this.state;
    return (
      <div>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.onUpdateLanguage}
        />
        {this.isLoading() && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </div>
    );
  }
}

export default Popular;

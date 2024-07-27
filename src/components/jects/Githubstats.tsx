import React from 'react';

const GitHubStats: React.FC = () => {
  return (
    <div>
    <hr></hr>
    <h1>Github Stats</h1>
      <img
        src="https://github-readme-stats.vercel.app/api?username=Slitherings&show_icons=true&theme=tokyonight"
        alt="GitHub Stats"
        style={{opacity:'70%'}}
      />
      <br></br>
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Slitherings&layout=compact&theme=tokyonight_duo"
        alt="Top Languages"
        style={{opacity:'70%'}}
      />
    </div>
  );
};

export default GitHubStats;

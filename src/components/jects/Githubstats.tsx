import React from 'react';

const GitHubStats: React.FC = () => {
  return (
    <div>
    <hr></hr>
    <h1>Github Stats</h1>
      <img
        src="https://github-readme-stats.vercel.app/api?username=Slitherings&show_icons=true&theme=tokyonight"
        alt="GitHub Stats"
      />
      <br></br>
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Slitherings&layout=compact&theme=tokyonight_duo"
        alt="Top Languages"
      />
    </div>
  );
};

export default GitHubStats;

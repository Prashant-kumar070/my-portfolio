import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    languages: [
      'Core PHP',
      'Laravel, CodeIgniter',
      'Node.JS',
      'Wordpress',
      'Html, Css, Javascript, JQuery'
    ],
    databases: [
      'MySQL',
      'MongoDB',
    ],
    tools: [
      'VScode',
      'Git, AWS',
      'Bitbucket, Github, Gitlab',
      'Supabase',
      'Trello, Jira',
      'Docker',
      'CI/CD Pipelines'
    ],
    coreCompetencies: [
      'API Development',
      'Payment Gateways',
      'Third Party APIs integration',
      'Servers',
      'Performance Optimization'
    ],
    aiAgents: [
      'Cursor',
      'Codex',
      'Claude',
      'ChatGPT',
      'Perplexity'
    ]
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {/* Languages */}
        <div className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30 hover:bg-gray-600/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
          <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
          <ul className="space-y-2">
            {skills.languages.map((skill, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30 hover:bg-gray-600/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
          <h3 className="text-xl font-semibold text-white mb-4">Databases</h3>
          <ul className="space-y-2">
            {skills.databases.map((database, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>{database}</span>
              </li>
            ))}
          </ul>
        </div>

            {/* AI Agents I Use */}
        <div className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30 hover:bg-gray-600/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
          <h3 className="text-xl font-semibold text-white mb-4">AI Agents I Use</h3>
          <ul className="space-y-2">
            {skills.aiAgents.map((agent, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>{agent}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30 hover:bg-gray-600/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
          <h3 className="text-xl font-semibold text-white mb-4">Tools</h3>
          <ul className="space-y-2">
            {skills.tools.map((tool, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Competencies */}
        <div className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-600/30 hover:bg-gray-600/30 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
          <h3 className="text-xl font-semibold text-white mb-4">Core Competencies</h3>
          <ul className="space-y-2">
            {skills.coreCompetencies.map((competency, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <span>{competency}</span>
              </li>
            ))}
          </ul>
        </div>

    
      </div>
    </div>
  );
};

export default Skills;

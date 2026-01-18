const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '👋 Введение',
    },

    {
      type: 'category',
      label: '📜 Правила',
      items: [
        'rules/general',
        'rules/chat',
        'rules/trade',
      ],
    },

    {
      type: 'category',
      label: '🖥 Сервер',
      items: [
        'servers/vanilla',
      ],
    },

    {
      type: 'category',
      label: '✨ Особенности',
      items: [
        'features/chat',
        'features/sponsor',
      ],
    },
  ],
};

module.exports = sidebars;

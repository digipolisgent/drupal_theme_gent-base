'use strict';

module.exports = {
  context: {
    text: 'Aliquam ullamcorper vehicula leo. Mauris mattis egestas hendrerit. Sed vitae aliquet mauris. Morbi at erat sed mi mollis maximus at sit amet enim. Sed quis libero eu mauris eleifend accumsan vitae semper turpis. Vestibulum nisl ipsum, ullamcorper euismod ultrices nec, tempor sit amet urna. Pellentesque bibendum a mi commodo consectetur. Aliquam nec est tellus.',
    modifier: 'messages--status',
    icon: 'icon-checkmark'
  },
  variants: [
    {
      name: 'default',
      label: 'Status'
    },
    {
      name: 'error',
      context: {
        icon: 'icon-cross',
        modifier: 'messages--error'
      }
    },
    {
      name: 'warning',
      context: {
        icon: 'icon-exclamation',
        modifier: 'messages--warning'
      }
    }
  ]
};

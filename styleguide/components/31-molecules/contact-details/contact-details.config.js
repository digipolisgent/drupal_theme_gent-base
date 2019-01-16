'use strict';

module.exports = {
  title: 'Contact details',
  status: 'alpha',
  handle: 'contact-details',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'default'
    },
    {
      name: 'inverted',
      context: {
        modifier: 'contact-details-inverted'
      }
    }
  ]
};

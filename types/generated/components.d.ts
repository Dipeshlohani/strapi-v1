import type { Schema, Attribute } from '@strapi/strapi';

export interface BlockActivityDetail extends Schema.Component {
  collectionName: 'components_block_activity_details';
  info: {
    displayName: 'ActivityDetail';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    img_url: Attribute.Media;
    date: Attribute.Date;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
    styles: Attribute.JSON;
  };
}

export interface ElementsCorousel extends Schema.Component {
  collectionName: 'components_elements_corousels';
  info: {
    displayName: 'Corousel';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img_url: Attribute.Media;
    btn: Attribute.Component<'elements.button'>;
  };
}

export interface ElementsDutyAndRole extends Schema.Component {
  collectionName: 'components_elements_duty_and_roles';
  info: {
    displayName: 'Duty&Role';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ElementsImportantLink extends Schema.Component {
  collectionName: 'components_elements_important_links';
  info: {
    displayName: 'ImportantLink';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    btn: Attribute.Component<'elements.button'>;
  };
}

export interface ElementsServiceCard extends Schema.Component {
  collectionName: 'components_elements_service_cards';
  info: {
    displayName: 'ServiceCard';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.activity-detail': BlockActivityDetail;
      'elements.button': ElementsButton;
      'elements.corousel': ElementsCorousel;
      'elements.duty-and-role': ElementsDutyAndRole;
      'elements.important-link': ElementsImportantLink;
      'elements.service-card': ElementsServiceCard;
    }
  }
}

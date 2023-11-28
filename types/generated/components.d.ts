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

export interface ElementsAboutUsCard extends Schema.Component {
  collectionName: 'components_elements_about_us_cards';
  info: {
    displayName: 'AboutUsCard';
  };
  attributes: {
    img_url: Attribute.Media;
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.RichText;
    link: Attribute.String;
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

export interface ElementsDetailContents extends Schema.Component {
  collectionName: 'components_elements_detail_contents';
  info: {
    displayName: 'DetailContents';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
  };
}

export interface ElementsDetailSummary extends Schema.Component {
  collectionName: 'components_elements_detail_summaries';
  info: {
    displayName: 'DetailSummary';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ElementsDocument extends Schema.Component {
  collectionName: 'components_elements_documents';
  info: {
    displayName: 'document';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    file_url: Attribute.Media;
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

export interface ElementsNewTeam extends Schema.Component {
  collectionName: 'components_elements_new_teams';
  info: {
    displayName: 'NewTeam';
  };
  attributes: {
    name: Attribute.String;
    designation: Attribute.String;
    img_url: Attribute.Media;
    duties: Attribute.Component<'elements.duty-and-role', true>;
  };
}

export interface ElementsOurMedia extends Schema.Component {
  collectionName: 'components_elements_our_medias';
  info: {
    displayName: 'OurMedia';
  };
  attributes: {
    img_url: Attribute.Media;
  };
}

export interface ElementsQuestionAnswers extends Schema.Component {
  collectionName: 'components_elements_question_answers';
  info: {
    displayName: 'questionAnswers';
    description: '';
  };
  attributes: {
    answers: Attribute.RichText;
    question: Attribute.String;
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

export interface ElementsStats extends Schema.Component {
  collectionName: 'components_elements_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    stat: Attribute.Integer;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.activity-detail': BlockActivityDetail;
      'elements.about-us-card': ElementsAboutUsCard;
      'elements.button': ElementsButton;
      'elements.corousel': ElementsCorousel;
      'elements.detail-contents': ElementsDetailContents;
      'elements.detail-summary': ElementsDetailSummary;
      'elements.document': ElementsDocument;
      'elements.duty-and-role': ElementsDutyAndRole;
      'elements.important-link': ElementsImportantLink;
      'elements.new-team': ElementsNewTeam;
      'elements.our-media': ElementsOurMedia;
      'elements.question-answers': ElementsQuestionAnswers;
      'elements.service-card': ElementsServiceCard;
      'elements.stats': ElementsStats;
    }
  }
}

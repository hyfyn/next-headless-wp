export type Post = {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: {
    rendered: string;
  };
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: false;
  };
  excerpt: {
    rendered: string;
    protected: false;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: [];
  categories: number[];
  tags: [];
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    about: [
      {
        href: string;
      }
    ];
    author: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    replies: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    "version-history": [
      {
        count: number;
        href: string;
      }
    ];
    "wp:featuredmedia": [
      {
        embeddable: true;
        href: string;
      }
    ];
    "wp:attachment": [
      {
        href: string;
      }
    ];
    "wp:term": [
      {
        taxonomy: string;
        embeddable: true;
        href: string;
      },
      {
        taxonomy: string;
        embeddable: true;
        href: string;
      }
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean;
      }
    ];
  };
};

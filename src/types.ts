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

export type Image = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: [];
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes: {
      medium: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      large: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      thumbnail: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      medium_large: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      full: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
    image_meta: {
      aperture: string;
      credit: string;
      camera: string;
      caption: string;
      created_timestamp: string;
      copyright: string;
      focal_length: string;
      iso: string;
      shutter_speed: string;
      title: string;
      orientation: string;
      keywords: [];
    };
  };
  post: Post;
  source_url: string;
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
  };
};

export type PostWithFeaturedImage = {
  post: Post;
  featuredImage: Image;
};

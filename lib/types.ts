import { Interface } from "readline";

export interface ISocialIcon {
  id: number;
  iconClass: string;
  iconLink: string;
}

export interface IFooterLink {
  id: number;
  linkText: string;
  linkLocation: string;
}

export interface IFooterColumn {
  id: number;
  columnText: string;
  links: Array<IFooterLink>;
}

export interface IFooter {
  aboutTitle: string;
  aboutText: string;
  aboutQuestionsText: string;
  aboutAddress: string;
  aboutPhone: string;
  aboutEmail: string;
  aboutCopyright: string;
  socialIcons: Array<ISocialIcon>;
  footercolumns: Array<IFooterColumn>;
}

export class Footer implements IFooter {
  constructor(
    public aboutTitle: string,
    public aboutText: string,
    public aboutQuestionsText: string,
    public aboutAddress: string,
    public aboutPhone: string,
    public aboutEmail: string,
    public aboutCopyright: string,
    public socialIcons: Array<ISocialIcon>,
    public footercolumns: Array<IFooterColumn>
  ) {}
}

export interface ICounter {
  id: number;
  icon: string;
  count: number;
  text: string;
}

export interface ICounterList {
  items: Array<ICounter>;
}

export class CounterList implements ICounterList {
  constructor(public items: Array<ICounter>) {}
}

export interface ITestimonial {
  title: string;
  subtext: string;
  image: string;
  items: Array<ITestimonialItem>;
}

export interface ITestimonialItem {
  id: number;
  icon: string;
  testimonial_text: string;
  testimonial_author: string;
  author_role: string;
  author_image: string;
}

export class Testimonial implements ITestimonial {
  constructor(
    public title: string,
    public subtext: string,
    public image: string,
    public items: Array<ITestimonialItem>
  ) {}
}

export interface IPromoCard {
  id: number;
  title: string;
  text: string;
  link: string;
  image: string;
}

export interface IPromo {
  maintitle: string;
  maindescription: string;
  mainlink: string;
  mainlinktitle: string;
  items: Array<IPromoCard>;
}

export class Promo implements IPromo {
  constructor(
    public maintitle: string,
    public maindescription: string,
    public mainlink: string,
    public mainlinktitle: string,
    public items: Array<IPromoCard>
  ) {}
}

export interface IBanner {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  primarytext: string;
  primarylink: string;
  secondarytext: string;
  secondarylink: string;
}

export class Banner implements IBanner {
  constructor(
    public title: string,
    public subtitle: string,
    public image: string,
    public description: string,
    public primarytext: string,
    public primarylink: string,
    public secondarytext: string,
    public secondarylink: string
  ) {}
}

export interface IHero {
  breadcrumb: string;
  title: string;
  image: string;
}

export class Hero implements IHero {
  constructor(
    public breadcrumb: string,
    public title: string,
    public image: string
  ) {}
}

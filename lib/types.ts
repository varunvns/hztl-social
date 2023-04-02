import { Interface } from "readline";
import { UserShoutOut } from "@/models/shoutout/user";

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
  items: Array<UserShoutOut>;
}

export class Promo implements IPromo {
  constructor(
    public maintitle: string,
    public maindescription: string,
    public mainlink: string,
    public mainlinktitle: string,
    public items: Array<UserShoutOut>
  ) {}
}

export interface IBanner {
  bannerTitle: string;
  bannerSubTitle: string;
  bannerImage: string;
  bannerDescription: string;
  bannerPrimaryText: string;
  bannerPrimaryLink: string;
  bannerSecondaryText: string;
  bannerSecondaryLink: string;
}

export class Banner implements IBanner {
  constructor(
    public bannerTitle: string,
    public bannerSubTitle: string,
    public bannerImage: string,
    public bannerDescription: string,
    public bannerPrimaryText: string,
    public bannerPrimaryLink: string,
    public bannerSecondaryText: string,
    public bannerSecondaryLink: string
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
